import * as React from 'react';
import styled from 'styled-components'
import { Typography } from '@material-ui/core';

import { ThemeProvider, getVarnishTheme } from '../lib';
import { Header, AI2Logo, AppTitle } from '../lib/components';

import Tabs from './Tabs';

// Can get and override part of base Varnish Theme
const updatedTheme = getVarnishTheme(
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
            <Description>Basic usage using default Varnish theme:</Description>
            <Tabs />
          </ThemeProvider>
        </Section>
        <Section>
          <ThemeProvider theme={updatedTheme}>
            <Description>Basic usage using overriden theme:</Description>
            <Tabs />
          </ThemeProvider>
        </Section>
        <Section>
          <ThemeProvider>
            <Description>Standard AI2 header:</Description>
            <Header position="static">
              <AI2Logo />
              <AppTitle>Skiff</AppTitle>
            </Header>
          </ThemeProvider>
        </Section>
      </Root>
    );
  }
}

const Root = styled.div`
  max-width: 960px;
  margin: 4rem auto;
`

const Section = styled.div`
  margin: 0 auto;
  padding: 4rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

// This div used the testColorLocal from our override
const Description = styled(Typography).attrs({ variant: 'h5' })`
  color: ${props => props.theme.testColorLocal};
  && {
    margin: 0 0 1rem;
  }
`;

export default App;
