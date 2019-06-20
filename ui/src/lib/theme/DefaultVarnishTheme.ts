import React from 'react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { typography } from './typography';
export type ColorInfo = typeof colors.R1;

export const DefaultVarnishTheme = {
    breakpoints,
    colors,
    palette: {
      black: '#000',
      white: '#FFF',
      primary: colors.B9,
      primary2: colors.B8,
      primary3: colors.B6,
      primary4: colors.O6,
      error: colors.R6
    },
    typography,
    shape: {
      borderRadius: 4
    }
    // when adding more, consider what material and ant have done:
    // https://material-ui.com/customization/default-theme/
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
};
