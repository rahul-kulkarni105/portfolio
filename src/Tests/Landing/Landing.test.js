import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { Landing } from '../../Components/Landing';

describe('Components/Landing Test suite', () => {
  it('Tets to check if component loads successfully', () => {
    const props = {};
    const LandingComponent = shallow(<Landing {...props} />);
    expect(LandingComponent.exists()).toBe(true);
  });

  it('Snapshot verification test for Landing Component', () => {
    const LandingComponent = create(<Landing />).toJSON();
    expect(LandingComponent).toMatchSnapshot();
  })
})