import { mount } from '@vue/test-utils'
import Values from '.././components/Values.vue'
import { getAllValues, createValue, deleteValue, updateValue } from '.././services/ValueService'

describe('Values', () => {
  it('Show alert when empty value is submitted', async () => {
    const wrapper = mount(Values)
    const textInput = wrapper.find('textarea')
    const button = wrapper.find('button[type="button"]')
    await textInput.setValue('')
    await button.trigger('click')
    expect(wrapper.find('div[class="alert alert-danger"]').text()).toContain('Please fill out.')
  })

  it('Show modal on creating and updating a value', async () => {
    const wrapper = mount(Values)
    const button = wrapper.find('button[type="button"]')
    await button.trigger('click')
    expect(wrapper.find('b-modal').exists()).toBe(true)
  })
})