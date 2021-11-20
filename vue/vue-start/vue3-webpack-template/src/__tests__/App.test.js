// src/components/__tests__/HelloJest.test.js

import { flushPromises, shallowMount } from '@vue/test-utils';
import App from '../App.vue';

describe('HelloJest', () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallowMount(App);
  // });
  test('click 하여 카운트증가', async () => {
    const test = jest.spyOn(App.methods, 'increase');
    const wrapper = shallowMount(App);
    expect(wrapper.vm.count).toBe(0);
    wrapper.find('h1').trigger('click');
    expect(wrapper.vm.count).toBe(1);

    wrapper.find('h1').trigger('click');
    wrapper.find('h1').trigger('click');

    await flushPromises();
    expect(test).toBeCalledTimes(3);
    expect(wrapper.vm.count).toBe(3);
  });
});
