import React from 'react';
import { render } from '@testing-library/react';

import Board from './board';

test('renders board', () => {
  const { getByText } = render(
    <Board />
  );

  expect(getByText(/Restore/i)).toBeInTheDocument();
});
