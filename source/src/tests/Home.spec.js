import { mount } from '@vue/test-utils'
import Home from ".././components/Home.vue"
import Values from ".././components/Values.vue"
import Principles from ".././components/Principles.vue"

describe('Home', () => {
  it('renders a Values component', () => {
    const wrapper = mount(Home)
    expect(wrapper.getComponent(Values).is(Values)).toBe(true)
  })

  it('renders a Principles component', () => {
    const wrapper = mount(Home)
    expect(wrapper.getComponent(Principles).is(Principles)).toBe(true)
  })
})