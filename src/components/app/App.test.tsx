import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { IUser } from '../../interfaces/IUser';
import { IUSerInputs } from '../../interfaces/IUserInputs';

describe('The <App/> component', () => {
  const users: IUser[] = [
    {
      id: '5c093af1c6ee9117a581c7d6',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
      name: 'Bates Washington',
      company: 'ZOLAREX',
      email: 'bates.washington@zolarex.io',
      phone: '+1 (915) 447-2207',
      address: '958 Brevoort Place, Ona, Maine, 2433',
    },
    {
      id: '5c093af1aeca1bb00607fb2a',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Mollie Oneill',
      company: 'VIAGRAND',
      email: 'mollie.oneill@viagrand.biz',
      phone: '+1 (852) 535-3880',
      address: '120 Cedar Street, Mansfield, Kentucky, 8890',
    },
  ];

  const inputs: IUSerInputs = {
    name: '',
    email: '',
    address: '',
    company: '',
    phone: '',
  };

  it('should render only the View component', () => {
    const component = shallow(<App users={users} />);
    expect(component).toMatchSnapshot();
    expect(component.length).toBe(1);
  });

  it('initially has no user selected', () => {
    const component = shallow(<App users={users} />);
    expect(component.state('selected')).toBeUndefined();
  });

  it('should provide a method to select a user and re-render the View with a selected user', () => {
    const { id } = users[0];
    const component = shallow(<App users={users} />);
    const instance = component.instance() as App;

    // Assert there is no initial selected user.
    expect(component).toMatchSnapshot();
    expect(component.state('selected')).toBeUndefined();

    // Call the handleSelectUSer method with an id.
    instance.handleSelectUser(id)();

    // Asssert that a user is now selected.
    expect(component.state('selected')).toBe(id);
    expect(component).toMatchSnapshot();
  });

  it("has a handleSave method that updates a user's data", () => {
    const { id } = users[0];
    const component = shallow(<App users={users} />);
    const instance = component.instance() as App;
    const updated = users.map(u => (u.id === id ? { ...u, ...inputs } : u));

    // Select a user.
    instance.setState({ selected: id });
    expect(component.state('selected')).toBe(id);

    // Call the handleSave method and update the user's properties.
    // Assert the users state is updated.
    instance.handleSave(inputs);
    expect(component.state('users')).toEqual(updated);
  });

  it("the handleSave method should do nothing if there is no selected user or it can't find a user", () => {
    const id = 'user-id';
    const component = shallow(<App users={users} />);
    const instance = component.instance() as App;

    // Test initial state.
    expect(component.state('selected')).toBeUndefined();
    expect(component.state('users')).toEqual(users);

    // Call the handleSave method.
    // Assert the initial state hasn't changed as long as the selected id is undefined.
    instance.handleSave(inputs);
    expect(component.state('users')).toEqual(users);

    // Set selected id.
    instance.setState({ selected: id });
    expect(component.state('selected')).toBe(id);

    // Call the handleSave method.
    // Assert the initial users state hasn't change since the user isn't be found.
    instance.handleSave(inputs);
    expect(component.state('users')).toEqual(users);
  });
});
