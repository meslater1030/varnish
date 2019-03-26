import * as React from 'react';
import styled from 'styled-components';

import logoWithText from './ai2-logo@720x142.png';

interface Props {
    alwaysShowText?: boolean
}

/**
 * Outputs the AI2 Logo. By default the component is responsive, and the
 * text portion of the logo is hidden at smaller resolutions. You can
 * disable this behavior by settings `alwaysShowText={true}`.
 */
export const AI2Logo = (props: Props) => {
    const logo = (
        <img src={logoWithText}
                width="360"
                height="71"
                alt="The Allen Institute for Artificial Intelligence" />
    );
    return (
        props.alwaysShowText
            ? logo
            : <ResponsiveLogoContainer>{logo}</ResponsiveLogoContainer>
    );
};

const ResponsiveLogoContainer = styled.div`
    display: inline-block;
    ${props => props.theme.breakpoints.down('sm')} {
        width: 87.5px;
        height: 71px;
        overflow: hidden;
    }
`;
