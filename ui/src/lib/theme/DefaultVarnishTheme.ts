import React from 'react';

import { breakpoints } from './breakpoints';
import { color, colorInfo } from './colors';
import { typography } from './typography';
import { textLink } from './textLink';
import { spacing } from './spacing';
export type ColorInfo = typeof color.R1;

export const DefaultVarnishTheme = {
    breakpoints,
    color,
    colorInfo,
    palette: {
      black: '#000',
      white: '#FFF',
      primary: colorInfo.B9,
      primary2: colorInfo.B8,
      primary3: colorInfo.B6,
      primary4: colorInfo.O6,
      error: colorInfo.R6
    },
    typography,
    textLink,
    shape: {
      borderRadius: 4
    },
    spacing
    // when adding more, consider what material and ant have done:
    // https://material-ui.com/customization/default-theme/
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
};
