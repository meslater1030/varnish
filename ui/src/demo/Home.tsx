import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Menu } from 'antd';

import packageJson from '../../package.json';
import logoWithText from './varnishLogo.svg';
import { About, Design } from './pages';
import { AppRoute } from './AppRoute';
import { ResponsiveWindowImage,
    TransparentLayout,
    Header,
    TopMenu,
    InternalLink,
    Spacer,
    HeaderSubTitle
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
        }
    ];

    render() {
        return (
            <TransparentLayout>
                <Header>
                    <ResponsiveWindowImage
                        src={logoWithText}
                        wideWidth={"194px"}
                        skinnyWidth={"72px"}
                        height={"56px"}
                        alt="Varnish" />
                    <SubHeader>{packageJson.version}</SubHeader>
                    <Spacer />
                    <TopMenu
                        defaultSelectedKeys={[this.props.location.pathname]}>
                        {this.routes.map(({ path, label }) => (
                            <Menu.Item key={path}>
                                <InternalLink to={path}>{label}</InternalLink>
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

const SubHeader = styled(HeaderSubTitle)`
    margin-left: ${({theme}) => theme.spacing.md};
`;
