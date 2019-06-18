import React from 'react';

import { Breakpoints } from './breakpoints';
import { Colors, colorGroups } from './colors';
import { Typography } from './typography';
export type ColorInfo = typeof Colors.R1;

export const DefaultVarnishTheme = {
    breakpoints: Breakpoints,
    colors: Colors,
    colorGroups: colorGroups,
    palette: {
      black: '#000',
      white: '#FFF',
      primary: Colors.B6,
      primary2: Colors.B5,
      primary3: Colors.B4,
      primary4: Colors.O6,
      error: Colors.R6
    },
    typography: Typography,
    shape: {
      borderRadius: 4
    }
    // when adding more, consider what material and ant have done:
    // https://material-ui.com/customization/default-theme/
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
};
