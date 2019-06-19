
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
        font-family: ${Typography.bodyBig.fontFamily};
    }
    html {
        font-size: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${Typography.headline1.fontFamily};
    }
    h1 {
        font-size: ${Typography.headline1.fontSize};
        line-height: ${Typography.headline1.lineHeight};
        font-weight: ${Typography.headline1.fontWeight};
    }
    h2 {
        font-size: ${Typography.headline2.fontSize};
        line-height: ${Typography.headline2.lineHeight};
        font-weight: ${Typography.headline2.fontWeight};
    }
    h3 {
        font-size: ${Typography.headline3.fontSize};
        line-height: ${Typography.headline3.lineHeight};
        font-weight: ${Typography.headline3.fontWeight};
    }
    h4 {
        font-size: ${Typography.headline4.fontSize};
        line-height: ${Typography.headline4.lineHeight};
        font-weight: ${Typography.headline4.fontWeight};
    }
    h5, h6 {
        font-size: ${Typography.headline5.fontSize};
        line-height: ${Typography.headline5.lineHeight};
        font-weight: ${Typography.headline5.fontWeight};
    }

    // general
    @font-family: ${Typography.bodyBig.fontFamily};
    @code-family: ${Typography.code.fontFamily};
    @text-color: ${Colors.N9.value};
    @text-color-secondary: ${Colors.N7.value};

    // breakpoint overrides
    @screen-xs: ${Breakpoints.xs}px;
    @screen-sm: ${Breakpoints.sm}px;
    @screen-md: ${Breakpoints.md}px;
    @screen-lg: ${Breakpoints.lg}px;
    @screen-xl: ${Breakpoints.xl}px;
    @screen-xxl: ${Breakpoints.xxl}px;

    // color overrides
    @gold-6: ${Colors.O6.value};
    @blue-6: ${Colors.B6.value};
    @green-6: ${Colors.G6.value};
    @red-6: ${Colors.R6.value};
    @cyan-6: ${Colors.T6.value};
    @purple-6: ${Colors.P6.value};
    @pink-6: ${Colors.P6.value};
    @magenta-6: ${Colors.M6.value};

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
