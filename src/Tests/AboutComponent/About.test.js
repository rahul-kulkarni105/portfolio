import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { About } from '../../Components/About';

describe('Components/About Test suite', () => {
  it('Tets to check if component loads successfully', () => {
    const props = {};
    const AboutComponent = shallow(<About {...props} />);
    expect(AboutComponent.exists()).toBe(true);
  });

  it('Snapshot verification test for About Component', () => {
    const AboutComponent = create(<About />).toJSON();
    expect(AboutComponent).toMatchSnapshot();
  })
})