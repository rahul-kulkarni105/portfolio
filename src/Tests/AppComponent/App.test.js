import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../../App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Enzyme tests
describe('App Test suite', () => {
  it('Tets to check if component loads successfully', () => {
    const props = {};
    const AppComponent = shallow(<App {...props} />);
    expect(AppComponent.exists()).toBe(true);
  });
})