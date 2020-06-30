import Vue from 'vue'
import { destroyVM, createVue } from '../util'
import ButtonGroup from 'packages/button-group'

describe('ButtonGroup', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(ButtonGroup)
    expect(Vue.component(ButtonGroup.name))
      .to.be.a('function')
  })

  it('button-group slot', () => {
    const btnHandler = sinon.spy()

    vm = createVue({
      template: `
        <baxi-button-group>
          <baxi-button @click="handle">Button</baxi-button>
        </baxi-button-group>
      `,
      methods: {
        handle () {
          return btnHandler()
        }
      }
    })
    let btn = vm.$el.querySelector('.baxi-button')
    btn.click()
    expect(btnHandler).to.be.calledOnce
  })
})