import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Menu } from 'antd';

import { ExternalLink, Header, ResponsiveWindowImage, Spacer, TopMenu, Footer, Body, PaddedContent } from '../../../lib/components';
import { PageTitle, SectionWithDivider, DefaultLiveProvider} from '../Shared';
import logoWithText from '../../varnishLogo.svg';
import { DefaultVarnishTheme } from '../../../lib/theme';

// TODO: add best practices and any info on colors etc that we want to show about the headers/footers

const liveScope = {
    styled,
    Header,
    ResponsiveWindowImage,
    Spacer,
    TopMenu,
    Menu,
    PaddedContent,
    logoWithText,
    DefaultVarnishTheme,
    ExternalLink,
    Footer
};

const examples = {
header: `
<div>
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
        <TopMenu defaultSelectedKeys={[1]}>
            <Menu.Item key="1"><ExternalLink>Link 1</ExternalLink></Menu.Item>
            <Menu.Item key="2"><ExternalLink>Link 2</ExternalLink></Menu.Item>
        </TopMenu>
    </Header>
    <PaddedContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
        metus. Suspendisse pharetra lobortis varius. Cras vulputate felis et mauris
        tincidunt, elementum volutpat urna euismod. Phasellus lacinia fringilla
        sapien. Quisque ac convallis elit, eget fringilla metus.
    </PaddedContent>
</div>
`.trim(),
footer: `
<div>
    <PaddedContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
        metus. Suspendisse pharetra lobortis varius. Cras vulputate felis et mauris
        tincidunt, elementum volutpat urna euismod. Phasellus lacinia fringilla
        sapien. Quisque ac convallis elit, eget fringilla metus.
    </PaddedContent>
    <Footer />
</div>
`.trim()
}

export class Headers extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Headers &amp; Footers</PageTitle>

                <h3> Appearance and Behavior </h3>
                Unified header for all AI2 properties.

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <h4>Header</h4>
                    <DefaultLiveProvider code={examples.header} scope={liveScope}/>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Footer</h4>
                    <DefaultLiveProvider code={examples.footer} scope={liveScope}/>
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}
