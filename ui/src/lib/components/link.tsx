import * as React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const baseLinkStyles = (_:any) => css<{active: boolean, inverse?: boolean}>`
    color: ${({ theme, active, inverse }) => (
        active
        ? (inverse ? theme.link.contrastActiveColor : theme.link.activeColor)
        : (inverse ? theme.link.contrastColor : theme.link.color)
    )};
    text-decoration: ${({theme}) => theme.link.decoration};

    &:hover {
        color: ${({ theme, inverse }) => (
            inverse ? theme.link.contrastHoverColor : theme.link.hoverColor
        )};
        text-decoration: ${({theme}) => theme.link.hoverDecoration};
    }
`;

export const ExternalLink = styled.a`
   ${baseLinkStyles}
`;

export const InternalLink = styled(NavLink)`
   ${baseLinkStyles}
`;
