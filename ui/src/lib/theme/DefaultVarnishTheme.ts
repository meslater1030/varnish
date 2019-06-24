import React from 'react';

import { breakpoints } from './breakpoints';
import { color, Color, RGB } from './colors';
import { typography } from './typography';
import { link } from './link';
import { spacing } from './spacing';
import { button } from './button';

export { Color, RGB };

export const DefaultVarnishTheme = {
    breakpoints,
    color,
    palette: {
        common:{
            black: color.black,
            white: color.white,
        },
        background: {
            light: color.N2,
            dark: color.B9,
            error: color.R1,
            info: color.B1,
            success: color.G1,
            warning: color.O1
        },
        border: {
            default: color.N4,
            error: color.R3,
            info: color.B3,
            success: color.G3,
            warning: color.O3
        },
        primary: {
            light: color.B5,
            main: color.B6,
            dark: color.B7,
            veryDark: color.B8
        },
        secondary: {
            main: color.O6
        },
        text: {
            primary: color.N9,
            secondary: color.N7,
            error: color.R6,
            info: color.B6,
            success: color.G6,
            warning: color.O6,
            contrast: color.N5
        }
    },
    typography,
    link,
    shape: {
        borderRadius: 4
    },
    spacing,
    button

    // when adding more, consider what material and ant have done:
    // https://material-ui.com/customization/default-theme/
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
};
