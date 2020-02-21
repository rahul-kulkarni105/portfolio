import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { Contact } from '../../Components/Contact';

describe('Components/Contact Test suite', () => {
  it('Tets to check if component loads successfully', () => {
    const props = {};
    const ContactComponent = shallow(<Contact {...props} />);
    expect(ContactComponent.exists()).toBe(true);
  });

  it('Snapshot verification test for Contact Component', () => {
    const ContactComponent = create(<Contact />).toJSON();
    expect(ContactComponent).toMatchSnapshot();
  })
})