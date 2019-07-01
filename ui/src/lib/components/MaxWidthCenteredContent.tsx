import * as React from 'react';
import styled from 'styled-components';

export const MaxWidthCenteredContent = styled.div`
    max-width: ${({theme}) => theme.breakpoints.xl};
    margin: 0 auto;
    padding: ${({theme}) => `0 ${theme.spacing.lg}`};

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        padding: ${({theme}) => `0 ${theme.spacing.sm}`};
    }
`;
