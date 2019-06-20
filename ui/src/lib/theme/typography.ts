import { convertPixelsToRemStr } from '../utils/base';
import { spacing } from './spacing';

// general
const defaultFontSize = convertPixelsToRemStr(16);
const defaultFontFamily = 'Lato';
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;
const fallbackDefaultFonts = ['Helvetica Neue', 'Helvetica', '-apple-system', 'BlinkMacSystemFont',
    'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Arial', 'sans-serif',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'];
const fallbackDefaultCodeFonts = ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo',
    'Courier', 'monospace'];

// headlines
const headlineFontFamily = 'Raleway';
const h1 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(46),
    lineHeight: convertPixelsToRemStr(50),
    fontWeight: fontWeightBold
};
const h2 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(36),
    lineHeight: convertPixelsToRemStr(40),
    fontWeight: fontWeightBold
};
const h3 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(24),
    lineHeight: convertPixelsToRemStr(28),
    fontWeight: fontWeightBold
};
const h4 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(18),
    lineHeight: convertPixelsToRemStr(22),
    fontWeight: fontWeightBold
};
const h5 = {
    fontFamily: [ headlineFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(13),
    lineHeight: convertPixelsToRemStr(18),
    fontWeight: fontWeightMedium
};

// body
const bodyFontFamily = defaultFontFamily;
const bodyJumbo = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(24),
    lineHeight: convertPixelsToRemStr(30),
};
const body = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(16),
    lineHeight: convertPixelsToRemStr(22),
};
const bodyBold = {
    fontFamily: body.fontFamily,
    fontSize: body.fontSize,
    lineHeight: body.lineHeight,
    fontWeight: fontWeightBold
};
const bodySmall = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(14),
    lineHeight: convertPixelsToRemStr(20),
};
const bodySmallBold = {
    fontFamily: bodySmall.fontFamily,
    fontSize: bodySmall.fontSize,
    lineHeight: bodySmall.lineHeight,
    fontWeight: fontWeightBold
};
const bodyMicro = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(13),
    lineHeight: convertPixelsToRemStr(18),
};
const notification = {
    fontFamily: [ bodyFontFamily, ...fallbackDefaultFonts ].join(", "),
    fontSize: convertPixelsToRemStr(14),
    lineHeight: convertPixelsToRemStr(18),
};
const notificationBold = {
    fontFamily: notification.fontFamily,
    fontSize: notification.fontSize,
    lineHeight: notification.lineHeight,
    fontWeight: fontWeightBold
};

//attribution
const attributionFontFamily = 'Volkhov';
const quote = {
  fontFamily: [ attributionFontFamily, ...fallbackDefaultFonts ].join(", "),
  fontSize: convertPixelsToRemStr(30),
  lineHeight: convertPixelsToRemStr(42),
  fontWeight: fontWeightBold
};
const author = {
  fontFamily: [ attributionFontFamily, ...fallbackDefaultFonts ].join(", "),
  fontSize: convertPixelsToRemStr(18),
  lineHeight: convertPixelsToRemStr(36),
};

//code
const codeFontFamily = 'Roboto Mono';
const code = {
  fontFamily: [ codeFontFamily, ...fallbackDefaultCodeFonts ].join(", "),
  fontSize: convertPixelsToRemStr(13),
  lineHeight: convertPixelsToRemStr(18),
};
const codeDark = {
  fontFamily: code.fontFamily,
  fontSize: code.fontSize,
  lineHeight: code.lineHeight,
  backgroundColorKey: 'N10',
  colorKey: 'N5',
  padding: spacing.lg,
};

export const typography = {
    // general
    fontSize: defaultFontSize,
    fontFamily: defaultFontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,

    // headlines
    headlineFontFamily,
    h1,
    h2,
    h3,
    h4,
    h5,

    // body
    bodyFontFamily,
    bodyJumbo,
    body,
    bodyBold,
    bodySmall,
    bodySmallBold,
    bodyMicro,
    notification,
    notificationBold,

    // attribution
    attributionFontFamily,
    quote,
    author,

    // code
    codeFontFamily,
    code,
    codeDark
};
