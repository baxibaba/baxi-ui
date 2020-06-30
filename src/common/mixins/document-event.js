/**
 * global window, document
 *
 */
export default {
  mounted () {
    if (typeof document === 'undefined') return
    forEachListener(this, (key, listener) => {
      on(this.$el, key, listener)
    })
  },
  beforeDestroy () {
    if (typeof document === 'undefined') return
    forEachListener(this, (key, listener) => {
      off(this.$el, key, listener)
    })
  }
}

const isBrowser = typeof window !== 'undefined'

const hasPassive = isBrowser && (() => {
  let supported = false

  try {
    const desc = {
      get () {
        supported = true
      }
    }
    const opts = Object.defineProperty({}, 'passive', desc)

    window.addEventListener('test', null, opts)
    window.removeEventListener('test', null, opts)
  } catch (e) {
    supported = false
  }

  return supported
})()


function forEachListener (vm, f) {
  const events = vm.$options.events
  Object.keys(events).forEach(key => {
    f(key, (event) => events[key].call(vm, event))
  })
}

const options = hasPassive ? { passive: false } : undefined

function on (el, name, fn) {
  el.addEventListener(name, fn, options)
}

function off(el, name, fn) {
  el.removeEventListener(name, fn, options)
}

