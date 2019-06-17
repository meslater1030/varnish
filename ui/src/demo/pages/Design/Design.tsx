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
import { AppRoute } from '../../../lib';


export class Design extends React.PureComponent<RouteComponentProps> {
    routes: AppRoute[] = [
        {
            path: '/design/colors',
            label: 'Colors',
            component: Colors
        },
        {
            path: '/design/typography',
            label: 'Typography',
            component: Typography
        },
        {
            path: '/design/buttons',
            label: 'Buttons',
            component: Buttons
        },
        {
            path: '/design/cards',
            label: 'Cards',
            component: Cards
        },
        {
            path: '/design/forms',
            label: 'Forms',
            component: Forms
        },
        {
            path: '/design/notifications',
            label: 'Notifications',
            component: Notifications
        },
        {
            path: '/design/tables',
            label: 'Tables',
            component: Tables
        },
        {
            path: '/design/headers',
            label: 'Headers',
            component: Headers
        }
    ];

    render() {
        return (
            <LeftMenuPage {...this.props} routes={this.routes} parentPath="/design"/>
        )
    }
}
