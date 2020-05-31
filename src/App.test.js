import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('initial state is 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Count: 0');
  });

  it('increments counter by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Count: 1');
  });

  it('decrements counter by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Count: -1');
  });
  
  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


