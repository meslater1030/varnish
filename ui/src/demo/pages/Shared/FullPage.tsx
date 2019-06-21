import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { TextLink,
    TransparentLayout,
    PaddedContent,
    Page,
    CenteredFooter
} from '../../../lib/components';


interface Props {
    children: React.ReactNode | React.ReactNodeArray
}

export class FullPage extends React.PureComponent<RouteComponentProps & Props> {
    render() {
        return (
            <TransparentLayout>
                <PaddedContent>
                    <Page>
                        {this.props.children}
                    </Page>
                </PaddedContent>
                <CenteredFooter>
                    Proudly built at the
                    {' '}<TextLink href="https://allenai.org">Allen Institute for Artificial Intelligence</TextLink>
                </CenteredFooter>
            </TransparentLayout>
        )
    }
}
