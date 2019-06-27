import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Menu } from 'antd';

import { ExternalLink, Header, ResponsiveWindowImage, Spacer, TopMenu, Footer, Body } from '../../../lib/components';
import { PageTitle, SectionWithDivider, LightPaper} from '../Shared';
import logoWithText from '../../varnishLogo.svg';
import { DefaultVarnishTheme } from '../../../lib/theme';

// TODO: add best practices and any info on colors etc that we want to show about the headers/footers

export class Headers extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Headers &amp; Footers</PageTitle>

                <SectionWithDivider>
                    <h3>Header</h3>
                    <Header>
                        <ResponsiveWindowImage
                            src={logoWithText}
                            wideWidth={"194px"}
                            skinnyWidth={"72px"}
                            height={"56px"}
                            breakWidth={DefaultVarnishTheme.breakpoints.lg.rem}
                            alt="Varnish"
                            />
                        <Spacer />
                        <TopMenu defaultSelectedKeys={[this.props.location.pathname]}>
                            <Menu.Item><ExternalLink>Link 1</ExternalLink></Menu.Item>
                            <Menu.Item><ExternalLink>Link 2</ExternalLink></Menu.Item>
                        </TopMenu>
                    </Header>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
                        metus. Suspendisse pharetra lobortis varius. Cras vulputate felis et mauris
                        tincidunt, elementum volutpat urna euismod. Phasellus lacinia fringilla
                        sapien. Quisque ac convallis elit, eget fringilla metus.
                    </Content>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h3>Footer</h3>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
                        metus. Suspendisse pharetra lobortis varius. Cras vulputate felis et mauris
                        tincidunt, elementum volutpat urna euismod. Phasellus lacinia fringilla
                        sapien. Quisque ac convallis elit, eget fringilla metus.
                    </Content>
                    <Footer />
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}

const Content = styled(Body)`
    display: inline-block;
    width: 100%;
    background: pink;
    padding: ${({theme}) => theme.spacing.sm};
`;
