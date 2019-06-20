import * as React from 'react';
import styled from 'styled-components';


export const TextLink = styled.a<{active: boolean, dark: boolean}>`
    color: ${({ theme, active, dark }) => (
        active
        ? (dark ? theme.textLink.contrastActiveColor.value : theme.textLink.activeColor.value)
        : (dark ? theme.textLink.contrastColor.value : theme.textLink.color.value)
    )};
    decoration: ${({theme}) => theme.textLink.decoration};

    &:hover {
        color: ${({ theme, dark }) => (
            dark ? theme.textLink.contrastHoverColor.value : theme.textLink.hoverColor.value
        )};
        decoration: ${({theme}) => theme.textLink.hoverDecoration};
    }
`;
