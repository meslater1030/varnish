import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { ExternalLink,
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
                    <div>
                        Proudly built at the
                        {' '}<ExternalLink href="https://allenai.org">Allen Institute for Artificial Intelligence</ExternalLink>
                    </div>
                </CenteredFooter>
            </TransparentLayout>
        )
    }
}
