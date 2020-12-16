import { shallowMount } from '@vue/test-utils'
import Home from "./Home.vue"

test('Home', () => {
  // render the component
  const wrapper = shallowMount(Home)

  // assert the error is rendered
  expect(wrapper.text()).toMatch('First Screening task')
})