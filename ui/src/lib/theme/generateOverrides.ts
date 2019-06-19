
declare var require: any
var fs = require('fs');
var process = require('process');

import { Breakpoints } from './breakpoints';
import { Colors } from './colors';
import { Typography } from './typography';

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
        font-family: ${Typography.body.fontFamily};
    }
    html {
        font-size: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${Typography.h1.fontFamily};
    }
    h1 {
        font-size: ${Typography.h1.fontSize};
        line-height: ${Typography.h1.lineHeight};
        font-weight: ${Typography.h1.fontWeight};
    }
    h2 {
        font-size: ${Typography.h2.fontSize};
        line-height: ${Typography.h2.lineHeight};
        font-weight: ${Typography.h2.fontWeight};
    }
    h3 {
        font-size: ${Typography.h3.fontSize};
        line-height: ${Typography.h3.lineHeight};
        font-weight: ${Typography.h3.fontWeight};
    }
    h4 {
        font-size: ${Typography.h4.fontSize};
        line-height: ${Typography.h4.lineHeight};
        font-weight: ${Typography.h4.fontWeight};
    }
    h5, h6 {
        font-size: ${Typography.h5.fontSize};
        line-height: ${Typography.h5.lineHeight};
        font-weight: ${Typography.h5.fontWeight};
    }

    // default media breakpoint sizes
    @media (max-width: ${Breakpoints.lg}px) {
        html {
            font-size: ${100 * 14/16}%;
        }
    }
    @media (max-width: ${Breakpoints.sm}px) {
        html {
            font-size: ${100 * 12/16}%;
        }
    }

    // general overrides to ant design variables
    @font-family: ${Typography.body.fontFamily};
    @code-family: ${Typography.code.fontFamily};
    @text-color: ${Colors.N9.value};
    @text-color-secondary: ${Colors.N7.value};

    // breakpoint overrides to ant design variables
    @screen-xs: ${Breakpoints.xs}px;
    @screen-sm: ${Breakpoints.sm}px;
    @screen-md: ${Breakpoints.md}px;
    @screen-lg: ${Breakpoints.lg}px;
    @screen-xl: ${Breakpoints.xl}px;
    @screen-xxl: ${Breakpoints.xxl}px;

    // color overrides to ant design variables
    @gold-6: ${Colors.O6.value};
    @blue-6: ${Colors.B6.value};
    @green-6: ${Colors.G6.value};
    @red-6: ${Colors.R6.value};
    @cyan-6: ${Colors.T6.value};
    @purple-6: ${Colors.P6.value};
    @pink-6: ${Colors.P6.value};
    @magenta-6: ${Colors.M6.value};
    @primary-color: @blue-6; // unchanged values are left in this file for clarity
    @info-color: @blue-6;
    @success-color: @green-6;
    @processing-color: @blue-6;
    @error-color: @red-6;
    @highlight-color: @red-6;
    @warning-color: @gold-6;
    @primary-1: ${Colors.B1.value};
    @primary-2: ${Colors.B2.value};
    @primary-3: ${Colors.B3.value};
    @primary-4: ${Colors.B4.value};
    @primary-5: ${Colors.B5.value}; // color used to control the text color in many active and hover states
    @primary-6: ${Colors.B6.value}; // color used to control the text color of active buttons
    @primary-7: ${Colors.B7.value};
    @primary-8: ${Colors.B8.value};
    @primary-9: ${Colors.B9.value};
    @primary-10: ${Colors.B10.value};

    // alert overrides to ant design variables
    @alert-success-border-color: ${Colors.G3.value};
    @alert-success-bg-color: ${Colors.G1.value};
    @alert-success-icon-color: @success-color;
    @alert-info-border-color: ${Colors.B3.value};
    @alert-info-bg-color: ${Colors.B1.value};
    @alert-info-icon-color: @info-color;
    @alert-warning-border-color: ${Colors.O3.value};
    @alert-warning-bg-color: ${Colors.O1.value};
    @alert-warning-icon-color: @warning-color;
    @alert-error-border-color: ${Colors.R3.value};
    @alert-error-bg-color: ${Colors.R1.value};
    @alert-error-icon-color: @error-color;

    // link overrides to ant design variables
    @link-color: ${Colors.B7.value};
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
