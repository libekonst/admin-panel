import React from 'react';
import { shallow } from 'enzyme';
import { View } from './View';
import { IUser } from '../../interfaces/IUser';

describe("The app's <View/> component", () => {
  const mockUsers: IUser[] = [
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
  const mockSave = jest.fn();
  const mockSelect = jest.fn();

  it("should render the App's view and pass undedfined to <UserForm />", () => {
    const component = shallow(
      <View users={mockUsers} onSave={mockSave} onSelectUser={mockSelect} />,
    );

    expect(component).toMatchSnapshot();
    expect(component.find('UserForm').prop('user')).toBeUndefined();
  });

  it('should find a user by the selected prop and pass it to <UserForm />', () => {
    const component = shallow(
      <View
        users={mockUsers}
        onSave={mockSave}
        onSelectUser={mockSelect}
        selected={mockUsers[0].id}
      />,
    );
    expect(component).toMatchSnapshot();
    expect(component.find('UserForm').prop('user')).toEqual(mockUsers[0]);
  });
});
