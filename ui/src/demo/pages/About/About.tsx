import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { Paragraph, TextLink, Body, H2 } from '../../../lib/components';
import { FullPage } from '../Shared/FullPage'

export class About extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <FullPage {...this.props}>
                <H2>
                    Welcome
                </H2>
                <br />
                <Body>
                    <Paragraph>
                        This is a demonstration of
                        {' '}<TextLink href="https://github.com/allenai/varnish">Varnish</TextLink>,
                        a custom theme provider for both
                        {' '}<TextLink href="https://ant.design">Ant Design</TextLink>
                        and
                        {' '}<TextLink href="https://www.styled-components.com/">Styled-Components</TextLink>.
                    </Paragraph>
                    <Paragraph>
                        Varnish provides common AI2 Styled-Components, components, and utilities.
                    </Paragraph>
                    <Paragraph>
                        Varnish is derived from the
                        {' '}<TextLink href="https://github.com/allenai/skiff-template">Skiff Template</TextLink>.
                        Skiff provides a <TextLink href="https://www.python.org/">Python</TextLink>
                        {' '}based API and a UI constructed with
                        {' '}<TextLink href="https://www.typescriptlang.org/">TypeScript</TextLink>,
                        {' '}<TextLink href="https://reactjs.org/">ReactJS</TextLink>,
                        and <TextLink href="https://ant.design/">Ant Design</TextLink>.
                    </Paragraph>
                    <Paragraph>
                        It is deployed to a Google managed Kubernetes cluster and provides
                        DNS, log aggregation, TLS and other capabilties out of the box,
                        thanks to the
                        {' '}<TextLink href="https://github.com/allenai/skiff">Skiff</TextLink>
                        {' '}project.
                    </Paragraph>
                    <Paragraph>
                        If you have any questions, concerns or feedback please don't
                        hesitate to reach out. You can open a
                        {' '}<TextLink href="https://github.com/allenai/skiff-template/issues/new">Github Issue</TextLink>
                        {' '}or contact us at
                        {' '}<TextLink href="mailto:reviz@allenai.org">reviz@allenai.org</TextLink>.
                    </Paragraph>
                </Body>
            </FullPage>
        )
    }
}


