import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { ParagraphWithSpace } from '../../../lib/components';


export class Notifications extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <ParagraphWithSpace>Notifications coming soon...</ParagraphWithSpace>
        )
    }
}
