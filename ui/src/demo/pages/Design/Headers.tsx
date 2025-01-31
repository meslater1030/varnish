import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { PageTitle, SectionWithDivider, DefaultLiveProvider} from '../Shared';

// TODO: add best practices and any info on colors etc that we want to show about the headers/footers

const examples = {
header: `
render(
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
)
`.trim(),
footer: `
render(
    <div>
        <PaddedContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
            metus. Suspendisse pharetra lobortis varius. Cras vulputate felis et mauris
            tincidunt, elementum volutpat urna euismod. Phasellus lacinia fringilla
            sapien. Quisque ac convallis elit, eget fringilla metus.
        </PaddedContent>
        <Footer />
    </div>
)
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
                    <DefaultLiveProvider code={examples.header} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Footer</h4>
                    <DefaultLiveProvider code={examples.footer} />
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}
