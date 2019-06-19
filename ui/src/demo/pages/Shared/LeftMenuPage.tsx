import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import * as Antd from 'antd';
import { Menu } from 'antd';

import { AppRoute } from '../../AppRoute';
import { ExternalLink,
    TransparentLayout,
    LeftMenu,
    LeftSider,
    PaddedContent,
    Page,
    CenteredFooter
} from '../../../lib/components';

interface Props {
    parentPath: string;
    routes: AppRoute[]
}

export class LeftMenuPage extends React.PureComponent<RouteComponentProps & Props> {
    render() {
        return (
            <TransparentLayout>
                <LeftSider>
                    <LeftMenu selectedKeys={[this.props.location.pathname]}>
                        {this.props.routes.map(({ path, label }) => (
                            <Menu.Item key={path}>
                                <Link to={path}>{label}</Link>
                            </Menu.Item>
                        ))}
                    </LeftMenu>
                </LeftSider>
                <ContentAndFooterArea>
                    <PaddedContent>
                        <Page>
                            <Switch>
                                <Redirect from={this.props.parentPath} exact to={this.props.routes[0].path} />
                                {this.props.routes.map(({ path, component }) => (
                                    <Route key={path} path={path} component={component} />
                                ))}
                            </Switch>
                        </Page>
                    </PaddedContent>
                    <CenteredFooter>
                        <div>
                            Proudly built at the
                            {' '}<ExternalLink href="https://allenai.org">Allen Institute for Artificial Intelligence</ExternalLink>
                        </div>
                    </CenteredFooter>
                </ContentAndFooterArea>
            </TransparentLayout>
        )
    }
}

const ContentAndFooterArea = styled(TransparentLayout)`
    margin-left: 200px;
`;
