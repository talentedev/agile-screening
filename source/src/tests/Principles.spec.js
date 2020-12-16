import { mount } from '@vue/test-utils'
import Principles from ".././components/Principles.vue"

describe('Principles', () => {
  it('Show alert when empty principle is submitted', async () => {
    const wrapper = mount(Principles)
    const textInput = wrapper.find('input[type="text"]')
    const button = wrapper.find('button[type="button"]')
    await textInput.setValue('')
    await button.trigger('click')
    expect(wrapper.find('div[class="alert alert-danger"]').text()).toContain('Please fill out.')
  })

  it('Show modal on creating and updating a principle', async () => {
    const wrapper = mount(Principles)
    const button = wrapper.find('button[type="button"]')
    await button.trigger('click')
    expect(wrapper.find('b-modal').is('b-modal')).toBe(true)
  })
})