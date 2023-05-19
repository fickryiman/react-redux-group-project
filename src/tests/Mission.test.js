import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../Redux/store';

test('It should render correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
