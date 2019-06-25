import * as React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export type ButtonTypes = 'primary' | 'default' | 'link' | 'marketing';

// todo: consider converting to use https://www.npmjs.com/package/styled-components-modifiers
export const Button = styled(AntButton)<{type: ButtonTypes, contrast: boolean}>`
    && {
        background: ${({theme, type}) => theme.button[type].background || theme.button.default.background};
        border: ${({theme, type, contrast}) => {
            return !contrast
                ? theme.button[type].border || theme.button.default.border
                : theme.button[type].contrastBorder || theme.button.default.contrastBorder || theme.button[type].border || theme.button.default.border
        }};
        color: ${({theme, type, contrast}) => {
            return !contrast
                ? theme.button[type].color || theme.button.default.color
                : theme.button[type].contrastColor || theme.button.default.contrastColor || theme.button[type].color || theme.button.default.color
        }};
        font-weight: ${({theme, type}) => theme.button[type].fontWeight || theme.button.default.fontWeight};
        height: ${({theme, type}) => theme.button[type].height || theme.button.default.height};
        padding: ${({theme, type}) => theme.button[type].padding || theme.button.default.padding};
        text-transform: ${({theme, type}) => theme.button[type].textTransform || theme.button.default.textTransform};

        &:hover {
            background: ${({theme, type, contrast}) => {
                return !contrast
                    ? theme.button[type].hover.background || theme.button.default.hover.background
                    : theme.button[type].hover.contrastBackground || theme.button.default.hover.contrastBackground || theme.button[type].hover.background|| theme.button.default.hover.background
            }};
            border: ${({theme, type, contrast}) => {
                return !contrast
                    ? theme.button[type].hover.border || theme.button.default.hover.border
                    : theme.button[type].hover.contrastBorder || theme.button.default.hover.contrastBorder || theme.button[type].hover.border || theme.button.default.hover.border
            }};
            color: ${({theme, type, contrast}) => {
                return !contrast
                    ? theme.button[type].hover.color || theme.button.default.hover.color
                    : theme.button[type].hover.contrastColor || theme.button.default.hover.contrastColor || theme.button[type].hover.color || theme.button.default.hover.color
            }};
            padding: ${({theme, type}) => theme.button[type].hover.padding || theme.button.default.hover.padding};
        }

        &:focus {
            border: ${({theme, type, contrast}) => {
                return !contrast
                    ? theme.button[type].focus.border || theme.button.default.focus.border
                    : theme.button[type].focus.contrastBorder || theme.button.default.focus.contrastBorder || theme.button[type].focus.border || theme.button.default.focus.border
            }};
            color: ${({theme, type, contrast}) => {
                return !contrast
                    ? theme.button[type].focus.color || theme.button.default.focus.color
                    : theme.button[type].focus.contrastColor || theme.button.default.focus.contrastColor || theme.button[type].focus.color || theme.button.default.focus.color
            }};
            padding: ${({theme, type}) => theme.button[type].focus.padding || theme.button.default.focus.padding};
        }

        &:disabled {
            background: ${({theme, type}) => theme.button[type].disabled.background || theme.button.default.disabled.background};
            border: ${({theme, type, contrast}) => {
                return !contrast
                    ? theme.button[type].disabled.border || theme.button.default.disabled.border
                    : theme.button[type].disabled.contrastBorder || theme.button.default.disabled.contrastBorder || theme.button[type].disabled.border || theme.button.default.disabled.border
            }};
            color: ${({theme, type, contrast}) => {
                return !contrast
                    ? theme.button[type].disabled.color || theme.button.default.disabled.color
                    : theme.button[type].disabled.contrastColor || theme.button.default.disabled.contrastColor || theme.button[type].disabled.color || theme.button.default.disabled.color
            }};
            opacity: ${({theme, type}) => theme.button[type].disabled.opacity || theme.button.default.disabled.opacity};
            padding: ${({theme, type}) => theme.button[type].disabled.padding || theme.button.default.disabled.padding};
        }
    }
`;
