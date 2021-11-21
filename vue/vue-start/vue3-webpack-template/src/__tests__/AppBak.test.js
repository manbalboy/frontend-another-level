// src/components/__tests__/HelloJest.test.js

import { flushPromises, mount, shallowMount } from '@vue/test-utils';
import AppBak from '../AppBak.vue';

describe('HelloJest', () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallowMount(AppBak);
  // });
  test('click 하여 카운트증가', async () => {
    const test = jest.spyOn(AppBak.methods, 'increase');
    const wrapper = shallowMount(AppBak);
    expect(wrapper.vm.count).toBe(0);
    await wrapper.find('h1').trigger('click');
    expect(wrapper.vm.count).toBe(1);

    await wrapper.find('h1').trigger('click');
    await wrapper.find('h1').trigger('click');

    const h1El = wrapper.find('h1');
    expect(h1El.text()).toBe('3');

    await flushPromises();
    expect(test).toBeCalledTimes(3);
    expect(wrapper.vm.count).toBe(3);
  });

  test('v-if test ', async () => {
    //목표 count 가 4 초과일 때 div > p 4보다 큽니다. 태그 보여짐
    const sTestText = '4보다 큽니다.';
    const wrapper = mount(AppBak);
    const h1El = wrapper.find('h1');
    await h1El.trigger('click');
    await h1El.trigger('click');
    await h1El.trigger('click');
    await h1El.trigger('click');

    const pEl = wrapper.find('div>p');
    expect(pEl.exists()).toBe(false);

    await h1El.trigger('click');
    const pEl2 = wrapper.find('div>p');
    expect(pEl2.exists()).toBe(true);
    expect(pEl2.text()).toEqual(sTestText);
  });

  test('v-for test and Child Component Test', async () => {
    const aTestArray = ['하나', '둘'];
    const wrapper = mount(AppBak, {
      data() {
        return {
          fruits: aTestArray,
        };
      },
    });
    const FruitComp = wrapper.findAllComponents({ name: 'Fruit' });

    expect(FruitComp.length).toBe(2);

    const liEls = wrapper.findAll('li');
    liEls.forEach((el, idx) => {
      // consol.log(el);
      expect(el.text()).toEqual(aTestArray[idx]);
    });
  });
});
