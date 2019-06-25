import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { FullPage } from '../Shared/FullPage'

export class Components extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <FullPage {...this.props}>
                <p>Components coming soon...</p>
            </FullPage>
        )
    }
}


