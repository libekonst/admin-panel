import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';

describe('The <Input /> component', () => {
  it('renders an input and a label paired to the input based on its name prop', () => {
    const inputName = 'myInput';
    const component = shallow(
      <Input name={inputName} label="This is a label paired to myInput" />,
    );

    expect(component).toMatchSnapshot();
    expect(component.find('label').prop('htmlFor')).toBe(inputName);
  });

  it('renders only an input element if the label prop is omitted', () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });

  it('properly passes any props other than label to the rendered input element', () => {
    const className = 'I have replaced the previous className';
    const component = shallow(<Input className={className} label="Label" />);
    const input = component.find('input');
    
    expect(component).toMatchSnapshot();
    expect(input.prop('className')).toBe(className);
    expect(input.prop('label')).toBeUndefined();
  });
});
