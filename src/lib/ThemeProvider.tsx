import React from 'react';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { NoSsr } from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { merge } from 'lodash';

/**
 * Module extension to allow additional typing on Material-UI theme styles.
 * See: https://material-ui.com/guides/typescript/
 * and https://material-ui.com/guides/interoperability/
 */
 declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    testColor: string;
  }
  interface ThemeOptions {
    testColor: string;
  }
}

/**
 * Collection of theme overrides for Material-UI and Styled-Components (private)
 */
const varnishTheme = {
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#2196f3',
      light: 'rgb(77, 171, 245)',
      dark: 'rgb(23, 105, 170)',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffa000',
      light: 'rgb(255, 179, 51)',
      dark: 'rgb(178, 112, 0)',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    }
  },
  testColor: 'red' // add whatever styles we want
};

/**
 * Return the default Varnish Theme with optional overrides merged in
 */
export const GetVarnishTheme = (overrides?: any ) => {
  return createMuiTheme(merge(JSON.stringify(varnishTheme), overrides));
};

/**
 * Provides both Material-UI and Styled-Components Context Theme
 * Providers based on DefaultTheme or passed in theme
 * MuiThemeProvider provides Material-UI with theme
 * SCThemeProvider provides StyledComponents with theme
 */
export const ThemeProvider = (props: {theme?: Theme, children: JSX.Element[] | React.ReactNode}) => {
  const muiTheme = createMuiTheme(props.theme || GetVarnishTheme());
  return (
    <NoSsr>
      <MuiThemeProvider theme={muiTheme}>
        <SCThemeProvider theme={muiTheme}>
          <React.Fragment>
            {props.children}
          </React.Fragment>
        </SCThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
}
