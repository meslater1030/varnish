import { color } from './colors';

const defaultColor = color.B7;
const contrastColor = color.B4;

export const link = {
    color: defaultColor,
    hoverColor: defaultColor,
    activeColor: defaultColor,
    decoration: 'none',
    hoverDecoration: 'underline',
    contrastColor: contrastColor,
    contrastHoverColor: contrastColor,
    contrastActiveColor: contrastColor
};
