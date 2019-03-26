import React from 'react';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { PaletteColor } from '@material-ui/core/styles/createPalette';
import { NoSsr } from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { merge } from 'lodash';

/**
 * Module extension to allow additional typing on Material-UI theme styles.
 * See: https://material-ui.com/guides/typescript/
 * and https://material-ui.com/guides/interoperability/
 */
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    highlight?: PaletteColor;
  }
}

/**
 * Collection of theme overrides for Material-UI and Styled-Components (private)
 */
const varnishTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgb(20, 70, 100)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e39a4c',
      contrastText: '#ffffff'
    },
    highlight: {
      main: '#fcb431'
    }
  }
};

/**
 * Return the default Varnish Theme with optional overrides merged in
 */
export const getVarnishTheme = (overrides?: any ) => {
  return createMuiTheme(merge({}, varnishTheme, overrides));
};

/**
 * Provides both Material-UI and Styled-Components Context Theme
 * Providers based on DefaultTheme or passed in theme
 * MuiThemeProvider provides Material-UI with theme
 * SCThemeProvider provides StyledComponents with theme
 */
export const ThemeProvider = (props: { theme?: Theme, children: React.ReactNode | React.ReactNodeArray }) => {
  const muiTheme = createMuiTheme(props.theme || getVarnishTheme());
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
