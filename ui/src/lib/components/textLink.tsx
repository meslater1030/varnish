import * as React from 'react';
import styled from 'styled-components';


export const TextLink = styled.a<{active: boolean, inverse: boolean}>`
    color: ${({ theme, active, inverse }) => (
        active
        ? (inverse ? theme.textLink.contrastActiveColor.value : theme.textLink.activeColor.value)
        : (inverse ? theme.textLink.contrastColor.value : theme.textLink.color.value)
    )};
    decoration: ${({theme}) => theme.textLink.decoration};

    &:hover {
        color: ${({ theme, inverse }) => (
            inverse ? theme.textLink.contrastHoverColor.value : theme.textLink.hoverColor.value
        )};
        decoration: ${({theme}) => theme.textLink.hoverDecoration};
    }
`;
