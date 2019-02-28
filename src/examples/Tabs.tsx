import * as React from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Typography
} from '@material-ui/core';
import styled from 'styled-components'

import Datatable from './Datatable';
import Form from './Form';

interface Props {};
interface State {
  value: number;
};

/**
 * Example of tabs
 */
class SimpleTabs extends React.Component<Props, State> {
  state = {
    value: 0,
  };

  handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Root>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Form /></TabContainer>}
        {value === 1 && <TabContainer><Datatable /></TabContainer>}
      </Root>
    );
  }
}

const Root = styled.div`
  flex-grow: 1;
  background-color: ${props => props.theme.palette.background.paper};
`;

const TabContainer = (props: {children: JSX.Element[] | React.ReactNode}) => {
  return (
    <TypographyDiv>
      {props.children}
    </TypographyDiv>
  );
}

const TypographyDiv = styled(Typography).attrs({
  component: 'div',
})`
  padding: 8 * 3;
`;

export default SimpleTabs;
