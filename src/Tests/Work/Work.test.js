import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { Work } from '../../Components/Work';

describe('Components/Work Test suite', () => {
  it('Tets to check if component loads successfully', () => {
    const props = {};
    const WorkComponent = shallow(<Work {...props} />);
    expect(WorkComponent.exists()).toBe(true);
  });

  it('Snapshot verification test for Work Component', () => {
    const WorkComponent = create(<Work />).toJSON();
    expect(WorkComponent).toMatchSnapshot();
  })
})