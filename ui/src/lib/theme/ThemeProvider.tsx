import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { DefaultVarnishTheme } from './DefaultVarnishTheme';

/**
 * Return the default Varnish Theme with optional overrides merged in
 * Not currently supported
 *
 * const getVarnishTheme = (overrides?: Partial<typeof DefaultVarnishTheme> ) => {
 *     return merge({}, DefaultVarnishTheme, overrides);
 * };
*/
const getVarnishTheme = () => {
  return DefaultVarnishTheme;
};

export const ThemeProvider = (props: { theme?: typeof DefaultVarnishTheme, children: React.ReactNode | React.ReactNodeArray }) => {
  const vTheme = props.theme || getVarnishTheme();
  return (
      <SCThemeProvider theme={vTheme}>
        <React.Fragment>
          {props.children}
        </React.Fragment>
      </SCThemeProvider>
  );
}
