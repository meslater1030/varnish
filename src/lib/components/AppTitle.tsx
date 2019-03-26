import * as React from 'react';
import { Typography } from '@material-ui/core'
import styled from 'styled-components';

/**
 * A component capturing the styles used for rendering an application title,
 * usually displayed in the `<Header />` component.
 */
export const AppTitle = styled(Typography).attrs({ variant: 'h1' })`
    && {
        font-size: ${props => props.theme.typography.h5.fontSize}
        text-transform: uppercase;
        font-weight: 600;
        background: ${props => props.theme.palette.secondary.main};
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        line-height: 1;
        color: ${props => props.theme.palette.secondary.contrastText};
    }
`
