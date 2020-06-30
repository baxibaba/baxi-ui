import Vue from 'vue'
import { destroyVM, createVue, createTest } from '../util'
import SelectGroup from 'packages/select-group'

describe('SelectGroup', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('use', () => {
    Vue.use(SelectGroup)
    expect(Vue.component(SelectGroup.name))
      .to.be.a('function')
  })

  it('select-group slot', () => {
    vm = createVue({
      template: `
        <baxi-select-group text="阵营">
          <baxi-select v-model="result"
                      :data="data"
                      title="选择器"
                      placeholder="请选择"/>
        </baxi-select-group>
      `,
      data () {
        return {
          data: ['部落', '联盟'],
          result: null
        }
      }
    })

    expect(vm.$el.classList.contains('baxi-select-group')).to.be.true

    let label = vm.$el.querySelector('.baxi-select-group-label')
    expect(label.textContent).to.equal('阵营')
  })
})