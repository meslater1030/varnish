import * as React from 'react';
import styled from 'styled-components'

import { ThemeProvider, GetVarnishTheme } from '../lib';

import Tabs from './Tabs';

// Can get and override part of base Varnish Theme
const updatedTheme = GetVarnishTheme(
  {
    palette: {
      primary: {
        main: '#00ff00'
      }
    },
    testColorLocal: 'darkGreen' // add whatever styles we want
  }
);

interface Props {};

/**
 * Simple example app
 * TODO: this app is basically for development, we should update is to showcase components/styles
 */
class App extends React.Component<Props> {
  // Consumer must wrap their app in ThemeProvider to get styles
  // They can also specify a theme to make overrides to base theme
  render() {
    return (
      <Root>
        <Section>
          <ThemeProvider>
            <Div>Basic usage using default Varnish theme</Div>
            <Tabs />
          </ThemeProvider>
        </Section>

        <Section>
          <ThemeProvider theme={updatedTheme}>
            <Div>Usage using overridden theme</Div>
            <Tabs />
          </ThemeProvider>
        </Section>
      </Root>
    );
  }
}

const Root = styled.div`
  width: 960px;
  margin: 4rem auto;
`

const Section = styled.div`
  margin: 4rem auto;
`

// This div used the testColorLocal from our override
const Div = styled.div`
  color: ${props => props.theme.testColorLocal};
`;

export default App;
