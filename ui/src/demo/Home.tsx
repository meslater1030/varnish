import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Menu } from 'antd';

import { About, Components, Design, PatternsAndGuides } from './pages';
import { AppRoute } from './AppRoute';
import { AI2Logo,
    TransparentLayout,
    Header,
    TopMenu
} from '../lib/components';

export default class Home extends React.PureComponent<RouteComponentProps> {
    routes: AppRoute[] = [
        {
            path: '/design',
            label: 'Design',
            component: Design
        },
        {
            path: '/components',
            label: 'Components',
            component: Components
        },
        {
            path: '/patterns-and-guides',
            label: 'Patterns and Guides',
            component: PatternsAndGuides
        },
        {
            path: '/about',
            label: 'About',
            component: About
        }
    ];

    render() {
        return (
            <TransparentLayout>
                <Header>
                    <AI2Logo />
                    <TopMenu
                        defaultSelectedKeys={[this.props.location.pathname]}>
                        {this.routes.map(({ path, label }) => (
                            <Menu.Item key={path}>
                                <Link key={path} to={path}>{label}</Link>
                            </Menu.Item>
                        ))}
                    </TopMenu>
                </Header>
                <Switch>
                    <Redirect from="/" exact to={this.routes[0].path} />
                    {this.routes.map(({ path, component }) => (
                        <Route key={path} path={path} component={component} />
                    ))}
                </Switch>
            </TransparentLayout>
        );
    }
}
