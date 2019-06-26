import * as React from 'react';
import styled from 'styled-components';

import microLogo from './logo-ai2-micro-25.svg';

export const AI2Banner = React.forwardRef<HTMLDivElement, any>(
    (_, ref) => (
        <DarkBanner ref={ref}>
            <MaxWidthContent>
                <a href="https://allenai.org">
                    <Logo
                        src={microLogo}
                        width="412"
                        height="25"
                        alt="Allen Institute for Artificial Intelligence"
                    />
                </a>
            </MaxWidthContent>
        </DarkBanner>
    )
);

const MaxWidthContent = styled.div`
    max-width: ${({theme}) => theme.breakpoints.xl};
    margin: 0 auto;
    padding: ${({theme}) => `0 ${theme.spacing.lg}`};
`;

const Logo = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
`;

const DarkBanner = styled.div`
    background: ${({theme}) => theme.palette.background.dark};
    padding: ${({theme}) => `${theme.spacing.xxs} 0`};
`;
