
declare var require: any
var fs = require('fs');
var process = require('process');

import { breakpoints } from './breakpoints';
import { color } from './colors';
import { typography } from './typography';
import { textLink } from './textLink';
import { spacing } from './spacing';
import { convertRemStrToPxStr } from '../utils/base';


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
        color: ${color.N9};
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
        text-transform: uppercase;
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
    @text-color: ${color.N9};
    @text-color-secondary: ${color.N7};

    // breakpoint overrides to ant design variables
    @screen-xs: ${breakpoints.xs}px;
    @screen-sm: ${breakpoints.sm}px;
    @screen-md: ${breakpoints.md}px;
    @screen-lg: ${breakpoints.lg}px;
    @screen-xl: ${breakpoints.xl}px;
    @screen-xxl: ${breakpoints.xxl}px;

    // color overrides to ant design variables
    @gold-6: ${color.O6};
    @blue-6: ${color.B6};
    @green-6: ${color.G6};
    @red-6: ${color.R6};
    @cyan-6: ${color.T6};
    @purple-6: ${color.P6};
    @pink-6: ${color.P6};
    @magenta-6: ${color.M6};
    @primary-color: @blue-6; // unchanged values are left in this file for clarity
    @info-color: @blue-6;
    @success-color: @green-6;
    @processing-color: @blue-6;
    @error-color: @red-6;
    @highlight-color: @red-6;
    @warning-color: @gold-6;
    @primary-1: ${color.B1};
    @primary-2: ${color.B2};
    @primary-3: ${color.B3};
    @primary-4: ${color.B4};
    @primary-5: ${color.B5}; // color used to control the text color in many active and hover states
    @primary-6: ${color.B6}; // color used to control the text color of active buttons
    @primary-7: ${color.B7};
    @primary-8: ${color.B8};
    @primary-9: ${color.B9};
    @primary-10: ${color.B10};

    // alert overrides to ant design variables
    @alert-success-border-color: ${color.G3};
    @alert-success-bg-color: ${color.G1};
    @alert-success-icon-color: @success-color;
    @alert-info-border-color: ${color.B3};
    @alert-info-bg-color: ${color.B1};
    @alert-info-icon-color: @info-color;
    @alert-warning-border-color: ${color.O3};
    @alert-warning-bg-color: ${color.O1};
    @alert-warning-icon-color: @warning-color;
    @alert-error-border-color: ${color.R3};
    @alert-error-bg-color: ${color.R1};
    @alert-error-icon-color: @error-color;

    // link overrides to ant design variables
    @link-color: ${textLink.color.value};
    @link-hover-color: ${textLink.hoverColor.value};
    @link-active-color: ${textLink.activeColor.value};
    @link-decoration: ${textLink.decoration};
    @link-hover-decoration: ${textLink.hoverDecoration};

    // vertical paddings
    @padding-lg: ${convertRemStrToPxStr(spacing.lg)}; // containers
    @padding-md: ${convertRemStrToPxStr(spacing.md)}; // small containers and buttons
    @padding-sm: ${convertRemStrToPxStr(spacing.sm)}; // Form controls and items
    @padding-xs: ${convertRemStrToPxStr(spacing.xs)}; // small items
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
