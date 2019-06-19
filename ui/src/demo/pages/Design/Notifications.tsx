import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { Paragraph } from '../../../lib/components';


export class Notifications extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <Paragraph>Notifications coming soon...</Paragraph>
        )
    }
}
