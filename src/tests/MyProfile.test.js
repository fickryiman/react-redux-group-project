import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import MyProfile from '../components/MyProfile';

describe('MyProfile', () => {
  it('should render missions and rockets correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
