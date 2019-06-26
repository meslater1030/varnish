import * as React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const baseLinkStyles = (_:any) => css<{active?: boolean, contrast?: boolean}>`
    color: ${({ theme, active, contrast }) => (
        active
        ? (contrast ? theme.link.contrastActiveColor : theme.link.activeColor)
        : (contrast ? theme.link.contrastColor : theme.link.color)
    )};
    text-decoration: ${({theme}) => theme.link.decoration};

    &:hover {
        color: ${({ theme, contrast }) => (
            contrast ? theme.link.hover.contrastColor : theme.link.hover.color
        )};
        text-decoration: ${({theme}) => theme.link.hover.decoration};
    }
`;

export const ExternalLink = styled.a`
   ${baseLinkStyles}
`;

export const InternalLink = styled(NavLink)`
   ${baseLinkStyles}
`;
