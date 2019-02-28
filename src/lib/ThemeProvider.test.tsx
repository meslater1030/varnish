import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
