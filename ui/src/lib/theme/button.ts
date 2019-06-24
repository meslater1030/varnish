import { convertPixelsToRem, convertRemStrToPx } from '../utils/base';
import { spacing } from './spacing';
import { color, Color } from './colors';
import { fontWeight } from './fontWeight';

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
interface Button {
    primary: ButtonStates;
    default: ButtonStates;
    link: ButtonStates;
    marketing: ButtonStates;
}
export const defaultSpacing = spacing.md;
const paddingWithBorderInside = (borderWidth: number, initilaPad = defaultSpacing) => {
    return `0 ${convertPixelsToRem(parseFloat(convertRemStrToPx(initilaPad.rem))-borderWidth)}`;
}
export const borderColor = 'N7';
const whiteColor = 'N1';
const blackColor = 'N8';
export const button: Button = {
    default: {
        background: color.transparent,
        border: `1px solid ${color[borderColor]}`,
        color: color[blackColor],
        contrastColor: color[whiteColor],
        fontWeight: fontWeight.bold,
        height: convertPixelsToRem(36),
        padding: paddingWithBorderInside(1),
        textTransform: 'auto',
        hover: {
            background: color.transparent,
            border: `2px solid ${color[borderColor]}`,
            padding: paddingWithBorderInside(2)
        },
        focus: {
            background: color.transparent,
            border: `3px solid ${color[borderColor]}`,
            padding: paddingWithBorderInside(3)
        },
        disabled: {
            background: color.transparent,
            border: `1px solid ${color[borderColor]}`,
            color: color[blackColor],
            contrastColor: color[whiteColor],
            opacity: 0.5,
            padding: paddingWithBorderInside(1)
        }
    },
    primary: {
        background: color.B6,
        border: `2px solid transparent`,
        color: color[whiteColor],
        padding: paddingWithBorderInside(2),
        hover: {
            border: `2px solid transparent`,
            background: color.B7
        },
        focus: {
            border: `2px solid ${color[borderColor]}`,
            padding: paddingWithBorderInside(2),
            color: color[whiteColor]
        },
        disabled: {
            opacity: 0.5,
            background: color.B8,
            border: `2px solid transparent`,
            color: color[whiteColor]
        }
    },
    link: {
        background: color.transparent,
        border: `2px solid transparent`,
        color: color.B5,
        contrastColor: color[whiteColor],
        padding: paddingWithBorderInside(2),
        hover: {
            background: color.B2,
            contrastBackground: color.B7,
            border: `2px solid transparent`,
            padding: paddingWithBorderInside(2)
        },
        focus: {
            border: `2px solid ${color[borderColor]}`,
            padding: paddingWithBorderInside(2)
        },
        disabled: {
            border: `2px solid transparent`,
            color: color.B5,
            contrastColor: color[whiteColor],
            opacity: 0.5,
            padding: paddingWithBorderInside(2)
        }
    },
    marketing: {
        border: `2px solid ${color.O6}`,
        contrastBorder: `2px solid ${color[whiteColor]}`,
        color: color.O6,
        contrastColor: color[whiteColor],
        fontWeight: fontWeight.bold,
        height: convertPixelsToRem(44),
        padding: paddingWithBorderInside(2, spacing.lg),
        textTransform: 'uppercase',
        hover: {
            background: color.O5,
            contrastBackground: color[whiteColor],
            border: `2px solid ${color.O6}`,
            contrastBorder: `2px solid ${color[whiteColor]}`,
            color: color[whiteColor],
            contrastColor: color.O6,
            padding: paddingWithBorderInside(2, spacing.lg)
        },
        focus: {
            background: color.transparent,
            border: `3px solid ${color.O6}`,
            contrastBorder: `3px solid ${color[whiteColor]}`,
            padding: paddingWithBorderInside(3, spacing.lg)
        },
        disabled: {
            background: color.transparent,
            border: `2px solid ${color.O6}`,
            contrastBorder: `2px solid ${color[whiteColor]}`,
            color: color.O6,
            contrastColor: color[whiteColor],
            opacity: 0.5,
            padding: paddingWithBorderInside(2, spacing.lg)
        }
    }
};
