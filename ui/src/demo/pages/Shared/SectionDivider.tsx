import * as React from 'react';
import styled from 'styled-components';

export const SectionDivider = styled.div`
    padding-bottom: ${({theme}) => theme.spacing.xl};
    margin-bottom: ${({theme}) => theme.spacing.xl};
    border-bottom: 1px solid ${({theme}) => theme.palette.border.default};
`;
