import * as React from 'react';
import styled from 'styled-components';

interface Props {
    logo: string;
    wideWidth: string;
    skinnyWidth: string;
    height: string;
    alt?: string;
    breakWidth?: string;
    alwaysShowText?: boolean;
}

/**
 * Outputs the Logo. By default the component is responsive, and the
 * text portion of the logo is hidden at smaller resolutions. You can
 * disable this behavior by settings `alwaysShowText={true}`.
 */
export const HeaderLogo = (props: Props) => {
    const fullLogo = (
        <img src={props.logo}
                width={props.wideWidth}
                height={props.height}
                alt={props.alt} />
    );
    return (
        props.alwaysShowText
            ? fullLogo
            : <ResponsiveLogoContainer
                breakWidth={props.breakWidth}
                width={props.skinnyWidth}
                height={props.height}
            >{fullLogo}</ResponsiveLogoContainer>
    );
};

const ResponsiveLogoContainer = styled.div<{width: string, height: string, breakWidth?: string}>`
    display: flex;
    @media (max-width: ${({theme, breakWidth}) => breakWidth ? breakWidth : theme.breakpoints.sm}) {
        width: ${({width}) => width};
        height: ${({height}) => height};
        overflow: hidden;
    }
`;

