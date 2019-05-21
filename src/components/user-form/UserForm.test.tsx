import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from './UserForm';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { IUser } from '../../interfaces/IUser';

describe('The <UserForm /> component', () => {
  const inputs: IUSerInputs = {
    name: '',
    email: '',
    address: '',
    company: '',
    phone: '',
  };

  // Snapshot
  it("renders only the form's view", () => {
    const mockOnSave = jest.fn();
    const component = shallow(<UserForm onSave={mockOnSave} />);

    expect(component).toMatchSnapshot();
    expect(component.children.length).toBe(1);
  });

  // componentDidUpdate()
  it('componentDidUpdate is run when a new user is received and the state is reset', () => {
    const mockOnSave = jest.fn();
    const component = shallow<UserForm>(<UserForm onSave={mockOnSave} />);
    const user: IUser = {
      id: '5c093af1c6ee9117a581c7d6',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
      name: 'Bates Washington',
      company: 'ZOLAREX',
      email: 'bates.washington@zolarex.io',
      phone: '+1 (915) 447-2207',
      address: '958 Brevoort Place, Ona, Maine, 2433',
    };
    const newInputs: IUSerInputs = {
      name: 'Bates Washington',
      company: 'ZOLAREX',
      email: 'bates.washington@zolarex.io',
      phone: '+1 (915) 447-2207',
      address: '958 Brevoort Place, Ona, Maine, 2433',
    };

    // Get first snapshot. Assert initial inputs are empty.
    expect(component).toMatchSnapshot();
    expect(component.state().inputs).toEqual(inputs);

    component.setState({ hasChanged: true });
    
    // Setting the user prop should cause componentDidMount to update the state.
    component.setProps({ user });

    // Second snapshot, changing the user prop should re-render.
    expect(component).toMatchSnapshot();

    // Assert state has properly changed.
    expect(component.state().hasChanged).toBe(false);
    expect(component.state().inputs).toEqual(newInputs);
  });

  // handleChange()
  it('handleChange toggles hasChanged to true and changes the input when the handleChange method is called', () => {
    const mockOnSave = jest.fn();
    const component = shallow<UserForm>(<UserForm onSave={mockOnSave} />);
    const instance = component.instance() as UserForm;

    // Assert initial states are properly set.
    expect(component.state().hasChanged).toEqual(false);
    expect(component.state().inputs).toEqual(inputs);
    const event = {
      persist: jest.fn(),
      target: { value: 'my-name' },
    };

    // Assert hasChanged toggles to true, inputs contains the new value, e.persist() is called.
    instance.handleChange('name')(event);
    expect(component.state().hasChanged).toEqual(true);
    expect(component.state().inputs).toEqual({ ...inputs, name: 'my-name' });
    expect(event.persist).toHaveBeenCalled();
  });

  // handleSave()
  it('handleSave calls the onSave prop fn and sets hasChanged to false if input is valid', () => {
    const mockOnSave = jest.fn();
    const component = shallow<UserForm>(<UserForm onSave={mockOnSave} />);
    const instance = component.instance() as UserForm;

    // Imitate that input has changed
    component.setState({ hasChanged: true });

    // mock event, invalid input
    const eventInvalid = {
      preventDefault: jest.fn(),
      currentTarget: { checkValidity: jest.fn(() => false) },
    };

    // @ts-ignore -> mock the event object
    instance.handleSave(eventInvalid);
    expect(eventInvalid.preventDefault).toHaveBeenCalled();
    expect(eventInvalid.currentTarget.checkValidity).toHaveBeenCalled();

    // Assert that when the input is not valid, the function returns early.
    expect(mockOnSave).not.toHaveBeenCalled();
    expect(component.state().hasChanged).toBe(true);

    // mock event, valid input
    const eventValid = {
      preventDefault: jest.fn(),
      currentTarget: { checkValidity: jest.fn(() => true) },
    };

    // @ts-ignore -> mock the event object
    instance.handleSave(eventValid);
    expect(eventValid.preventDefault).toHaveBeenCalled();
    expect(eventValid.currentTarget.checkValidity).toHaveBeenCalled();

    // Assert that when the input is valid, the save service is called and hasChanged resets.
    expect(mockOnSave).toHaveBeenCalled();
    expect(component.state().hasChanged).toBe(false);
  });

  // resetState()
  it('resetState resets the state to its initial values', () => {
    const mockOnSave = jest.fn();
    const component = shallow<UserForm>(<UserForm onSave={mockOnSave} />);
    const instance = component.instance() as UserForm;
    const updatedInputs = {
      name: 'a',
      company: 'a',
      email: 'a',
      phone: 'a',
      address: 'a',
    };

    // Store initial state
    const initialState = component.state();

    // update the state
    component.setState({ hasChanged: true, inputs: updatedInputs });

    // Assert that the current state is different.
    expect(component.state()).not.toEqual(initialState);

    // Assert that state is reset.
    instance.resetState();
    expect(component.state()).toEqual(initialState);
  });

  // handleCancel()
  it('handleCancel resets the form state and calls e.preventDefault()', () => {
    const mockOnSave = jest.fn();
    const component = shallow<UserForm>(<UserForm onSave={mockOnSave} />);
    const instance = component.instance() as UserForm;
    const e = { preventDefault: jest.fn() };
    const updatedInputs = {
      name: 'a',
      company: 'a',
      email: 'a',
      phone: 'a',
      address: 'a',
    };

    // Store initial state
    const initialState = component.state();

    // update the state
    component.setState({ hasChanged: true, inputs: updatedInputs });

    // Assert that the current state is different.
    expect(component.state()).not.toEqual(initialState);

    // @ts-ignore -> mock the event object
    instance.handleCancel(e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(component.state()).toEqual(initialState);
  });
});
