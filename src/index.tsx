import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './examples/App';
import FullPage from './examples/FullPage';
import { ThemeProvider } from './lib';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact={true} component={App} />
        <ThemeProvider>
            <Route path="/full-page" exact={true} component={FullPage} />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
