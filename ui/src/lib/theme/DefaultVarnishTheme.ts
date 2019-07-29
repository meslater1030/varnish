import { breakpoints } from './breakpoints';
import { color, Color, RGB } from './colors';
import { typography } from './typography';
import { link } from './link';
import { spacing } from './spacing';
import { button } from './button';
import { palette } from './palette';
import { shape } from './shape';
import { DefaultTheme } from './DefaultTheme';

export { Color, RGB };

export const DefaultVarnishTheme: DefaultTheme = {
    breakpoints,
    color,
    palette,
    typography,
    link,
    shape,
    spacing,
    button

    // when adding more, consider what material and ant have done:
    // https://material-ui.com/customization/default-theme/
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
};
