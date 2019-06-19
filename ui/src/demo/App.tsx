import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import { GlobalStyles, ThemeProvider } from '../lib/theme';


export default class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <GlobalStyles />
                    <ThemeProvider>
                        <Route path="/" component={Home} />
                    </ThemeProvider>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
