import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { DefaultVarnishTheme } from './DefaultVarnishTheme';
import { DefaultTheme } from './DefaultTheme';

export const ThemeProvider = (props: { theme?: DefaultTheme, children: React.ReactNode | React.ReactNodeArray }) => {
  const vTheme = props.theme || DefaultVarnishTheme;

  return (
      <SCThemeProvider theme={vTheme}>
        <React.Fragment>
          {props.children}
        </React.Fragment>
      </SCThemeProvider>
  );
}
