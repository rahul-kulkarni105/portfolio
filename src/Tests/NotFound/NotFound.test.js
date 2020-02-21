import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { NotFound } from '../../Components/NotFound';

describe('Components/NotFound Test suite', () => {
  it('Tets to check if component loads successfully', () => {
    const props = {};
    const NotFoundComponent = shallow(<NotFound {...props} />);
    expect(NotFoundComponent.exists()).toBe(true);
  });

  it('Snapshot verification test for NotFound Component', () => {
    const NotFoundComponent = create(<NotFound />).toJSON();
    expect(NotFoundComponent).toMatchSnapshot();
  })
})