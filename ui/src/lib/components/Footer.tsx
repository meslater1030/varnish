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
                            {' '}<ExternalLink contrast={true} href="https://allenai.org">Allen Institute for Artificial Intelligence (AI2)</ExternalLink>
                            {' '}| <ExternalLink contrast={true} href="https://allenai.org/privacy-policy.html">Privacy Policy</ExternalLink>
                            {' '}| <ExternalLink contrast={true} href="https://allenai.org/terms.html">Terms of Use</ExternalLink>
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
