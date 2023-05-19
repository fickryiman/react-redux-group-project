import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/store';

test('It should render correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});