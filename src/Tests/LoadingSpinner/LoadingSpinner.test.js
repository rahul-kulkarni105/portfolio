import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { LoadingSpinner } from '../../Components/LoadingSpinner';

describe('Components/LoadingSpinner Test suite', () => {
  it('Tets to check if component loads successfully', () => {
    const props = {};
    const LoadingSpinnerComponent = shallow(<LoadingSpinner {...props} />);
    expect(LoadingSpinnerComponent.exists()).toBe(true);
  });

  it('Snapshot verification test for LoadingSpinner Component', () => {
    const LoadingSpinnerComponent = create(<LoadingSpinner />).toJSON();
    expect(LoadingSpinnerComponent).toMatchSnapshot();
  })
})