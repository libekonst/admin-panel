import React from 'react';
import { shallow } from 'enzyme';
import { ListTileText } from './ListTileText';

describe('The <ListTileText /> component', () => {
  it('renders primary and secondary texts, if both are provided', () => {
    const component = shallow(<ListTileText primary="Primary" secondary="Secondary" />);

    expect(component).toMatchSnapshot();
  });
  it('renders only the primary text, if the secondary is omitted', () => {
    const component = shallow(<ListTileText primary="Primary" />);

    expect(component).toMatchSnapshot();
  });
  it('applies the selected className modifier to each child if the selected prop is true', () => {
    const component = shallow(
      <ListTileText primary="Primary" secondary="Secondary" selected />,
    );
    expect(component).toMatchSnapshot();
  });
});
