import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Menu } from 'antd';

import logoWithText from './varnishLogo.svg';
import { About, Components, Design, PatternsAndGuides } from './pages';
import { AppRoute } from './AppRoute';
import { HeaderLogo,
    TransparentLayout,
    Header,
    TopMenu,
    InternalLink,
    Spacer
} from '../lib/components';

export default class Home extends React.PureComponent<RouteComponentProps> {
    routes: AppRoute[] = [
        {
            path: '/',
            exact: true,
            label: 'Welcome',
            component: About
        },
        {
            path: '/design',
            label: 'Design',
            component: Design
        }/*,
        {
            path: '/components',
            label: 'Components',
            component: Components
        },
        {
            path: '/patterns-and-guides',
            label: 'Patterns and Guides',
            component: PatternsAndGuides
        }*/
    ];

    render() {
        return (
            <TransparentLayout>
                <Header>
                    <HeaderLogo logo={logoWithText} wideWidth={"194px"} skinnyWidth={"72px"} height={"56px"} alt="Varnish" />
                    <Spacer />
                    <TopMenu
                        defaultSelectedKeys={[this.props.location.pathname]}>
                        {this.routes.map(({ path, label }) => (
                            <Menu.Item key={path}>
                                <InternalLink key={path} to={path}>{label}</InternalLink>
                            </Menu.Item>
                        ))}
                    </TopMenu>
                </Header>
                <Switch>
                    {this.routes.map(({ path, exact, component }) => (
                        <Route key={path} path={path} exact={exact} component={component} />
                    ))}
                </Switch>
            </TransparentLayout>
        );
    }
}
