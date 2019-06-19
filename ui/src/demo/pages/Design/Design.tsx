import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import {
    Colors,
    Typography,
    LeftMenuPage,
    Buttons,
    Cards,
    Forms,
    Notifications,
    Tables,
    Headers
} from '..';
import { AppRoute } from '../../AppRoute';


export class Design extends React.PureComponent<RouteComponentProps> {
    parentPath = '/design';
    routes: AppRoute[] = [
        {
            path: `${this.parentPath}/colors`,
            label: 'Colors',
            component: Colors
        },
        {
            path: `${this.parentPath}/typography`,
            label: 'Typography',
            component: Typography
        },
        {
            path: `${this.parentPath}/buttons`,
            label: 'Buttons',
            component: Buttons
        },
        {
            path: `${this.parentPath}/cards`,
            label: 'Cards',
            component: Cards
        },
        {
            path: `${this.parentPath}/forms`,
            label: 'Forms',
            component: Forms
        },
        {
            path: `${this.parentPath}/notifications`,
            label: 'Notifications',
            component: Notifications
        },
        {
            path: `${this.parentPath}/tables`,
            label: 'Tables',
            component: Tables
        },
        {
            path: `${this.parentPath}/headers`,
            label: 'Headers',
            component: Headers
        }
    ];

    render() {
        return (
            <LeftMenuPage {...this.props} routes={this.routes} parentPath={this.parentPath}/>
        )
    }
}
