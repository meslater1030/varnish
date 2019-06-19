import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { Paragraph } from '../../../lib/components';
import { FullPage } from '../Shared/FullPage'

export class PatternsAndGuides extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <FullPage {...this.props}>
                <Paragraph>Patterns and Guides coming soon...</Paragraph>
            </FullPage>
        )
    }
}
