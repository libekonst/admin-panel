import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from './UserList';
import { IUser } from '../../interfaces/IUser';

describe('The <UserList /> component', () => {
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

  // Test snapshots, event handlers registered.
  it('maps through an array of users and renders a <ListTile /> for each user', () => {
    const mockClickUser = jest.fn(() => null); // An event handler for a ListItem.
    const mockSelectUser = jest.fn((id: string) => mockClickUser); // Event handler generator.
    const component = shallow(<UserList users={users} onSelectUser={mockSelectUser} />);

    expect(component).toMatchSnapshot();

    // Assert that a ListItem is rendered for each user.
    expect(component.find('ul').children().length).toBe(users.length);

    // Assert that an event handler is registered for each user.
    expect(mockSelectUser).toBeCalledTimes(2);
    expect(mockSelectUser).toHaveBeenCalledWith(users[0].id);
    expect(mockSelectUser).toHaveBeenCalledWith(users[1].id);
    expect(mockClickUser).not.toHaveBeenCalled();
  });

  it('renders an empty list if the users array is empty', () => {
    const mockSelectUser = jest.fn((id: string) => () => null); // Event handler generator.
    const component = shallow(<UserList users={[]} onSelectUser={mockSelectUser} />);

    expect(component).toMatchSnapshot();

    // Assert no ListItems are rendered.
    expect(component.find('ul').children().length).toBe(0);

    // Assert no event handlers have been registered.
    expect(mockSelectUser).not.toHaveBeenCalled();
  });

  // Test event handler.
  it('passes an event handler on each child that can be called on click', () => {
    const mockClickUser = jest.fn(() => null); // An event handler for a ListItem.
    const mockSelectUser = jest.fn((id: string) => mockClickUser); // Event handler generator.
    const component = shallow(<UserList users={users} onSelectUser={mockSelectUser} />);
    const node = component.findWhere(node => node.key() === users[0].id);

    // Assert that the event handler is called properly.
    expect(mockClickUser).not.toHaveBeenCalled();
    node.simulate('click');
    expect(mockClickUser).toHaveBeenCalled();
  });
});
