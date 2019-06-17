import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { ParagraphWithSpace } from '../../../lib/components';
import { FullPage } from '../Shared/FullPage'

export class Components extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <FullPage {...this.props}>
                <ParagraphWithSpace>Components coming soon...</ParagraphWithSpace>
            </FullPage>
        )
    }
}


