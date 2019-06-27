import { convertPixelsToRem } from '../utils/base';
import { spacing } from './spacing';
import { color, Color } from './colors';
import { fontWeight } from './fontWeight';
import { palette } from './palette';

export interface ButtonStyle {
    padding?: string;
    height?: string;
    fontWeight?: number;
    color?: Color;
    contrastColor?: Color;
    border?: string;
    contrastBorder?: string;
    background?: Color;
    textTransform?: string;
    focus: any; // force required so we dont have to check for undefined later
    hover: any; // force required so we dont have to check for undefined later
    disabled: any; // force required so we dont have to check for undefined later
}
export interface Button {
    primary: ButtonStyle;
    default: ButtonStyle;
    link: ButtonStyle;
    marketing: ButtonStyle;
}
export const defaultSpacing = [spacing.md, spacing.xs];
const marketingSpacing = [spacing.lg, spacing.sm];
const paddingWithBorderInside = (borderWidth: number, initialPadding = defaultSpacing) => {
    return `${convertPixelsToRem(initialPadding[1].getPxValue() - borderWidth)} ${convertPixelsToRem(initialPadding[0].getPxValue() - borderWidth)}`;
}
export const borderColor = palette.border.dark;
const marketingBorderColor = palette.secondary.main;
const whiteColor = palette.text.contrast;
const blackColor = palette.text.primary;

export const button: Button = {
    default: {
        background: color.transparent,
        border: `1px solid ${borderColor}`,
        color: blackColor,
        contrastColor: whiteColor,
        fontWeight: fontWeight.bold,
        padding: paddingWithBorderInside(1),
        textTransform: 'auto',
        hover: {
            background: color.transparent,
            border: `2px solid ${borderColor}`,
            padding: paddingWithBorderInside(2)
        },
        focus: {
            background: color.transparent,
            border: `3px solid ${borderColor}`,
            padding: paddingWithBorderInside(3)
        },
        disabled: {
            background: color.transparent,
            border: `1px solid ${borderColor}`,
            color: blackColor,
            contrastColor: whiteColor,
            opacity: 0.5,
            padding: paddingWithBorderInside(1)
        }
    },
    primary: {
        background: palette.primary.main,
        border: `2px solid transparent`,
        color: whiteColor,
        padding: paddingWithBorderInside(2),
        hover: {
            border: `2px solid transparent`,
            background: palette.primary.dark
        },
        focus: {
            border: `2px solid ${borderColor}`,
            padding: paddingWithBorderInside(2),
            color: whiteColor
        },
        disabled: {
            opacity: 0.5,
            background: palette.primary.veryDark,
            border: `2px solid transparent`,
            color: whiteColor
        }
    },
    link: {
        background: color.transparent,
        border: `2px solid transparent`,
        color: palette.primary.light,
        contrastColor: whiteColor,
        padding: paddingWithBorderInside(2),
        hover: {
            background: palette.background.info,
            contrastBackground: palette.primary.dark,
            border: `2px solid transparent`,
            padding: paddingWithBorderInside(2)
        },
        focus: {
            border: `2px solid ${borderColor}`,
            padding: paddingWithBorderInside(2)
        },
        disabled: {
            border: `2px solid transparent`,
            color: palette.primary.light,
            contrastColor: whiteColor,
            opacity: 0.5,
            padding: paddingWithBorderInside(2)
        }
    },
    marketing: {
        border: `2px solid ${marketingBorderColor}`,
        contrastBorder: `2px solid ${whiteColor}`,
        color: marketingBorderColor,
        contrastColor: whiteColor,
        fontWeight: fontWeight.bold,
        padding: paddingWithBorderInside(2, marketingSpacing),
        textTransform: 'uppercase',
        hover: {
            background: palette.secondary.light,
            contrastBackground: whiteColor,
            border: `2px solid ${marketingBorderColor}`,
            contrastBorder: `2px solid ${whiteColor}`,
            color: whiteColor,
            contrastColor: marketingBorderColor,
            padding: paddingWithBorderInside(2, marketingSpacing)
        },
        focus: {
            background: color.transparent,
            border: `3px solid ${marketingBorderColor}`,
            contrastBorder: `3px solid ${whiteColor}`,
            padding: paddingWithBorderInside(3, marketingSpacing)
        },
        disabled: {
            background: color.transparent,
            border: `2px solid ${marketingBorderColor}`,
            contrastBorder: `2px solid ${whiteColor}`,
            color: marketingBorderColor,
            contrastColor: whiteColor,
            opacity: 0.5,
            padding: paddingWithBorderInside(2, marketingSpacing)
        }
    }
};
