import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import {
    Colors,
    Typography,
    Buttons,
    Cards,
    Links,
    Forms,
    Notifications,
    Tables,
    Headers,
    Spacing
} from '..';
import {  LeftMenuPage } from '../Shared';
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
            path: `${this.parentPath}/links`,
            label: 'Links',
            component: Links
        },
        {
            path: `${this.parentPath}/forms`,
            label: 'Forms',
            component: Forms
        },
        {
            path: `${this.parentPath}/spacing`,
            label: 'Spacing',
            component: Spacing
        },/*,
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
        }*/,
        {
            path: `${this.parentPath}/headers`,
            label: 'Header & Footer',
            component: Headers
        }
    ];

    render() {
        return (
            <LeftMenuPage {...this.props} routes={this.routes} parentPath={this.parentPath}/>
        )
    }
}
