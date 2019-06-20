/**
 * Query string values can be strings or an array of strings. This utility
 * retrieves the value if it's a string, or takes the first string if it's an
 * array of strings.
 *
 * If no value is provided, the provided default value is returned.
 *
 * @param {string} value
 * @param {string} defaultValue
 *
 * @returns {string}
 */
export function unwrap(
    value: string | string[] | undefined,
    defaultValue: string = ''
): string {
    if (value === undefined) {
        return defaultValue;
    } else if (Array.isArray(value)) {
        return value[0];
    } else {
        return value;
    }
}

// convert a hex color string to a {r: number, g: number, b:number}
export function hexToRgb(hex: string) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

function getRootFontSize(dynamic = false): number {
    return parseFloat((dynamic && typeof getComputedStyle !== 'undefined' && getComputedStyle(document.documentElement).fontSize) || '16');
}

// convert rems to px using document font size
export function convertRemToPxStr(rem: number, dynamic = false): string {
    return `${rem * getRootFontSize(dynamic)}px`;
}
export function convertRemStrToPxStr(remStr: string, dynamic = false): string {
    const rem = parseInt(remStr.substring(1, remStr.length-3));
    return convertRemToPxStr(rem, dynamic);
}

// convert px to rems using document font size
export function convertPixelsToRemStr(px: number, dynamic = false): string {
    return `${px / getRootFontSize(dynamic)}rem`;
}
export function convertPixelsStrToRemStr(pxStr: string, dynamic = false): string {
    const px = parseInt(pxStr.substring(1, pxStr.length-2));
    return convertPixelsToRemStr(px, dynamic);
}
