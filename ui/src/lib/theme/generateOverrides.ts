
declare var require: any
var fs = require('fs');
var process = require('process');

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { typography } from './typography';

console.log('Generating less overrides...');

// template
const template =`
    // less overrides to convert antd to ai2 styles
    // and general css for non react users

    // global
    html, body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        font-smoothing: antialiased;
        font-family: ${typography.body.fontFamily};
    }
    html {
        font-size: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${typography.h1.fontFamily};
    }
    h1 {
        font-size: ${typography.h1.fontSize};
        line-height: ${typography.h1.lineHeight};
        font-weight: ${typography.h1.fontWeight};
    }
    h2 {
        font-size: ${typography.h2.fontSize};
        line-height: ${typography.h2.lineHeight};
        font-weight: ${typography.h2.fontWeight};
    }
    h3 {
        font-size: ${typography.h3.fontSize};
        line-height: ${typography.h3.lineHeight};
        font-weight: ${typography.h3.fontWeight};
    }
    h4 {
        font-size: ${typography.h4.fontSize};
        line-height: ${typography.h4.lineHeight};
        font-weight: ${typography.h4.fontWeight};
    }
    h5, h6 {
        font-size: ${typography.h5.fontSize};
        line-height: ${typography.h5.lineHeight};
        font-weight: ${typography.h5.fontWeight};
    }

    // default media breakpoint sizes
    @media (max-width: ${breakpoints.lg}px) {
        html {
            font-size: ${100 * 14/16}%;
        }
    }
    @media (max-width: ${breakpoints.sm}px) {
        html {
            font-size: ${100 * 12/16}%;
        }
    }

    // general overrides to ant design variables
    @font-family: ${typography.body.fontFamily};
    @code-family: ${typography.code.fontFamily};
    @text-color: ${colors.N9.value};
    @text-color-secondary: ${colors.N7.value};

    // breakpoint overrides to ant design variables
    @screen-xs: ${breakpoints.xs}px;
    @screen-sm: ${breakpoints.sm}px;
    @screen-md: ${breakpoints.md}px;
    @screen-lg: ${breakpoints.lg}px;
    @screen-xl: ${breakpoints.xl}px;
    @screen-xxl: ${breakpoints.xxl}px;

    // color overrides to ant design variables
    @gold-6: ${colors.O6.value};
    @blue-6: ${colors.B6.value};
    @green-6: ${colors.G6.value};
    @red-6: ${colors.R6.value};
    @cyan-6: ${colors.T6.value};
    @purple-6: ${colors.P6.value};
    @pink-6: ${colors.P6.value};
    @magenta-6: ${colors.M6.value};
    @primary-color: @blue-6; // unchanged values are left in this file for clarity
    @info-color: @blue-6;
    @success-color: @green-6;
    @processing-color: @blue-6;
    @error-color: @red-6;
    @highlight-color: @red-6;
    @warning-color: @gold-6;
    @primary-1: ${colors.B1.value};
    @primary-2: ${colors.B2.value};
    @primary-3: ${colors.B3.value};
    @primary-4: ${colors.B4.value};
    @primary-5: ${colors.B5.value}; // color used to control the text color in many active and hover states
    @primary-6: ${colors.B6.value}; // color used to control the text color of active buttons
    @primary-7: ${colors.B7.value};
    @primary-8: ${colors.B8.value};
    @primary-9: ${colors.B9.value};
    @primary-10: ${colors.B10.value};

    // alert overrides to ant design variables
    @alert-success-border-color: ${colors.G3.value};
    @alert-success-bg-color: ${colors.G1.value};
    @alert-success-icon-color: @success-color;
    @alert-info-border-color: ${colors.B3.value};
    @alert-info-bg-color: ${colors.B1.value};
    @alert-info-icon-color: @info-color;
    @alert-warning-border-color: ${colors.O3.value};
    @alert-warning-bg-color: ${colors.O1.value};
    @alert-warning-icon-color: @warning-color;
    @alert-error-border-color: ${colors.R3.value};
    @alert-error-bg-color: ${colors.R1.value};
    @alert-error-icon-color: @error-color;

    // link overrides to ant design variables
    @link-color: ${colors.B7.value};
    @link-hover-color: @link-color;
    @link-active-color: @link-color;
    @link-decoration: none;
    @link-hover-decoration: underline;
`;

// All paths are relative to package.json.
const outputFile = './public/theme-overrides.less';

// Then generate
console.log('Generating pages...');
try {
    fs.writeFileSync(outputFile, template);
}
catch (err){
    console.log('Error during generation: ' + err);
    process.exit(1);
}

// Process complete.
console.log('Done!');
