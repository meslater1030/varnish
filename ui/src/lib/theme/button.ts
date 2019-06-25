import { convertPixelsToRem } from '../utils/base';
import { spacing } from './spacing';
import { color, Color } from './colors';
import { fontWeight } from './fontWeight';
import { palette } from './palette';

interface ButtonStates {
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
interface ButtonType {
    primary: ButtonStates;
    default: ButtonStates;
    link: ButtonStates;
    marketing: ButtonStates;
}
export const defaultSpacing = spacing.md;
const paddingWithBorderInside = (borderWidth: number, initialPadding = defaultSpacing) => {
    return `0 ${convertPixelsToRem(initialPadding.getPxValue() - borderWidth)}`;
}
export const borderColor = palette.border.dark;
const whiteColor = palette.text.contrast;
const blackColor = palette.text.primary;
const marketingBorderColor = palette.secondary.main;
export const button: ButtonType = {
    default: {
        background: color.transparent,
        border: `1px solid ${borderColor}`,
        color: blackColor,
        contrastColor: whiteColor,
        fontWeight: fontWeight.bold,
        height: convertPixelsToRem(36),
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
        height: convertPixelsToRem(44),
        padding: paddingWithBorderInside(2, spacing.lg),
        textTransform: 'uppercase',
        hover: {
            background: palette.secondary.light,
            contrastBackground: whiteColor,
            border: `2px solid ${marketingBorderColor}`,
            contrastBorder: `2px solid ${whiteColor}`,
            color: whiteColor,
            contrastColor: marketingBorderColor,
            padding: paddingWithBorderInside(2, spacing.lg)
        },
        focus: {
            background: color.transparent,
            border: `3px solid ${marketingBorderColor}`,
            contrastBorder: `3px solid ${whiteColor}`,
            padding: paddingWithBorderInside(3, spacing.lg)
        },
        disabled: {
            background: color.transparent,
            border: `2px solid ${marketingBorderColor}`,
            contrastBorder: `2px solid ${whiteColor}`,
            color: marketingBorderColor,
            contrastColor: whiteColor,
            opacity: 0.5,
            padding: paddingWithBorderInside(2, spacing.lg)
        }
    }
};
