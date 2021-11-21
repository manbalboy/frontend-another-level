import Fruit from '../../ch01/Fruit';
import { mount } from '@vue/test-utils';

describe('Fruit Component test', () => {
  test('name props 확인', () => {
    const sTestNameText = '내려온 Props';
    const wrapper = mount(Fruit, {
      propsData: {
        name: sTestNameText,
      },
    });

    expect(wrapper.props().name).toEqual(sTestNameText);
    expect(wrapper.find('li').text()).toEqual(sTestNameText);
  });
});
