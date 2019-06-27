import * as React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import { ExternalLink, Body } from '.';

interface Props {
    children?: React.ReactNode | React.ReactNodeArray;
}

export class Footer extends React.PureComponent<Props> {
    render() {
        return (
            <StyledFooter>
                {this.props.children
                    ? this.props.children
                    : (
                        <Body>
                            Proudly built at the
                            {' '}<ExternalLink href="https://allenai.org" contrast={true}>Allen Institute for Artificial Intelligence</ExternalLink>
                        </Body>
                    )
                }
            </StyledFooter>
        )
    }
}

const StyledFooter = styled(Layout.Footer)`
    && {
        background: ${({theme}) => theme.palette.background.dark};
        color: ${({theme}) => theme.palette.text.contrast};
        text-align: center;
    }
`;
