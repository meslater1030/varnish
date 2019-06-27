import * as React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

import { DefaultVarnishTheme } from '../theme';
import { ButtonStyle } from '../theme/button';
import { Color } from '../theme/colors';

export type ButtonType = 'primary' | 'default' | 'link' | 'marketing';

type Optional<T> = T | undefined;

interface ComponentProps {
    theme: typeof DefaultVarnishTheme,
    type?: ButtonType,
    contrast?: boolean
}

const valueOrDefault = <T extends {}>(
    props: ComponentProps,
    styleFunc: (b: ButtonStyle) => Optional<T>,
    contrastStyleFunc?: (b: ButtonStyle) => Optional<T>
): Optional<T> => {
    let ret: Optional<T>;
    if(props.contrast && contrastStyleFunc) {
        ret = contrastStyleFunc(props.theme.button[props.type || 'default']) || contrastStyleFunc(props.theme.button.default);
    }
    if(!ret) {
        ret = styleFunc(props.theme.button[props.type || 'default']) || styleFunc(props.theme.button.default);
    }
    return ret;
}
const toHexIfDefined = (c: Optional<Color>) => {
    return c ? c.hex : undefined;
}

// todo: consider converting to use https://www.npmjs.com/package/styled-components-modifiers
export const Button = styled(AntButton)<ComponentProps>`
    && {
        height: auto;
        font-weight: ${props => valueOrDefault(props, b => b.fontWeight) };
        text-transform: ${props => valueOrDefault(props, b => b.textTransform) };
        background: ${props => toHexIfDefined(valueOrDefault(props, b => b.background)) };
        border: ${props => valueOrDefault(props, b => b.border, b => b.contrastBorder) };
        color: ${props => toHexIfDefined(valueOrDefault(props, b => b.color, b => b.contrastColor)) };
        padding: ${props => valueOrDefault(props, b => b.padding) };

        &:hover {
            background: ${props => toHexIfDefined(valueOrDefault(props, b => b.hover.background,  b => b.hover.contrastBackground)) };
            border: ${props => valueOrDefault(props, b => b.hover.border, b => b.hover.contrastBorder) };
            color: ${props => toHexIfDefined(valueOrDefault(props, b => b.hover.color, b => b.hover.contrastColor)) };
            padding: ${props => valueOrDefault(props, b => b.hover.padding) };
        }

        &:focus {
            border: ${props => valueOrDefault(props, b => b.focus.border, b => b.focus.contrastBorder) };
            color: ${props => toHexIfDefined(valueOrDefault(props, b => b.focus.color, b => b.focus.contrastColor)) };
            padding: ${props => valueOrDefault(props, b => b.focus.padding) };
        }

        &:disabled {
            opacity: ${props => valueOrDefault(props, b => b.disabled.opacity) };
            background: ${props => toHexIfDefined(valueOrDefault(props, b => b.disabled.background,  b => b.disabled.contrastBackground)) };
            border: ${props => valueOrDefault(props, b => b.disabled.border, b => b.disabled.contrastBorder) };
            color: ${props => toHexIfDefined(valueOrDefault(props, b => b.disabled.color, b => b.disabled.contrastColor)) };
            padding: ${props => valueOrDefault(props, b => b.disabled.padding) };
        }
    }
`;
