import React from 'react';
import { shallow } from 'enzyme';
import { ListTile } from './ListTile';

describe('The <ListTile /> component', () => {
  const user = {
    id: '5c093af1c6ee9117a581c7d6',
    photo: 'https://randomuser.me/api/portraits/men/40.jpg',
    name: 'Bates Washington',
    company: 'ZOLAREX',
    email: 'bates.washington@zolarex.io',
    phone: '+1 (915) 447-2207',
    address: '958 Brevoort Place, Ona, Maine, 2433',
  };

  it("renders a <li /> element that contains a user's avatar and details", () => {
    const component = shallow(<ListTile user={user} />);
    expect(component).toMatchSnapshot();
  });

  it('passes the selected prop to its ListTileText child', () => {
    const component = shallow(<ListTile user={user} selected />);
    expect(component).toMatchSnapshot();
  });
});
