import React from 'react';
import { shallow } from 'enzyme';
import { View } from './View';
import { IUSerInputs } from '../../interfaces/IUserInputs';

describe("The user form's <View /> component", () => {
  const mockInputs: IUSerInputs = {
    name: '',
    email: '',
    address: '',
    company: '',
    phone: '',
  };

  it("renders the form's view with both buttons enabled when hasChanged is true", () => {
    const mockOnCancel = jest.fn();
    const mockOnSave = jest.fn();
    const mockOnChange = jest.fn();
    const component = shallow(
      <View
        inputs={mockInputs}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
        onSave={mockOnSave}
        hasChanged={true}
      />,
    );

    // Snapshot
    expect(component).toMatchSnapshot();

    // Assert that buttons are not disabled.
    expect(component.find('input[type="reset"]').prop('disabled')).toBeFalsy();
    expect(component.find('input[type="submit"]').prop('disabled')).toBeFalsy();
  });

  it('renders only the submit button as disabled when no input has changed', () => {
    const mockOnCancel = jest.fn();
    const mockOnSave = jest.fn();
    const mockOnChange = jest.fn();
    const component = shallow(
      <View
        inputs={mockInputs}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
        onSave={mockOnSave}
        hasChanged={false}
      />,
    );

    // Snapshot
    expect(component).toMatchSnapshot();

    // Assert the submit button is disabled.
    expect(component.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('registers an onChange handler for each input field', () => {
    const mockOnCancel = jest.fn();
    const mockOnSave = jest.fn();
    const mockRegisterOnChange = jest.fn();
    const component = shallow(
      <View
        inputs={mockInputs}
        onChange={mockRegisterOnChange}
        onCancel={mockOnCancel}
        onSave={mockOnSave}
        hasChanged={false}
      />,
    );

    expect(mockRegisterOnChange).toHaveBeenCalledTimes(Object.keys(mockInputs).length);
  });

  it('runs event handlers when the input changes, on form submit and on form reset', () => {
    const mockOnCancel = jest.fn();
    const mockOnSave = jest.fn();
    const mockHandleChange = jest.fn();
    const mockOnChange = jest.fn(() => mockHandleChange);
    const component = shallow(
      <View
        inputs={mockInputs}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
        onSave={mockOnSave}
        hasChanged={false}
      />,
    );

    // Test handleChange
    component
      .find('Input')
      .first()
      .simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();

    // Test submit
    component.find('form').simulate('submit');
    expect(mockOnSave).toHaveBeenCalled();

    // Test reset
    component.find('form').simulate('reset');
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
