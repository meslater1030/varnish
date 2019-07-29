import { Color } from './colors';
import { Spacing } from './spacing';
import { fontWeight } from './fontWeight';
import { Button } from './button';

export interface DefaultTheme {
    breakpoints: {
        xs: Spacing;
        sm: Spacing;
        md: Spacing;
        lg: Spacing;
        xl: Spacing;
        xxl: Spacing;
    };
    color: {
        R1: Color;
        R2: Color;
        R3: Color;
        R4: Color;
        R5: Color;
        R6: Color;
        R7: Color;
        R8: Color;
        R9: Color;
        R10: Color;
        O1: Color;
        O2: Color;
        O3: Color;
        O4: Color;
        O5: Color;
        O6: Color;
        O7: Color;
        O8: Color;
        O9: Color;
        O10: Color;
        G1: Color;
        G2: Color;
        G3: Color;
        G4: Color;
        G5: Color;
        G6: Color;
        G7: Color;
        G8: Color;
        G9: Color;
        G10: Color;
        T1: Color;
        T2: Color;
        T3: Color;
        T4: Color;
        T5: Color;
        T6: Color;
        T7: Color;
        T8: Color;
        T9: Color;
        T10: Color;
        B1: Color;
        B2: Color;
        B3: Color;
        B4: Color;
        B5: Color;
        B6: Color;
        B7: Color;
        B8: Color;
        B9: Color;
        B10: Color;
        P1: Color;
        P2: Color;
        P3: Color;
        P4: Color;
        P5: Color;
        P6: Color;
        P7: Color;
        P8: Color;
        P9: Color;
        P10: Color;
        M1: Color;
        M2: Color;
        M3: Color;
        M4: Color;
        M5: Color;
        M6: Color;
        M7: Color;
        M8: Color;
        M9: Color;
        M10: Color;
        N1: Color;
        N2: Color;
        N3: Color;
        N4: Color;
        N5: Color;
        N6: Color;
        N7: Color;
        N8: Color;
        N9: Color;
        N10: Color;
        black: Color;
        white: Color;
        transparent: Color;
    };
    palette: {
        common: {
            black: Color;
            white: Color;
            transparent: Color;
        };
        background: {
            light: Color;
            dark: Color;
            error: Color;
            info: Color;
            success: Color;
            warning: Color;
        };
        border: {
            light: Color;
            dark: Color;
            main: Color;
            error: Color;
            info: Color;
            success: Color;
            warning: Color;
        };
        primary: {
            light: Color;
            main: Color;
            dark: Color;
            veryDark: Color;
        };
        secondary: {
            light: Color;
            main: Color;
            dark: Color;
        };
        text: {
            primary: Color;
            secondary: Color;
            error: Color;
            info: Color;
            success: Color;
            warning: Color;
            contrast: Color;
        };
    };
    typography: {
        fontSize: string;
        fontFamily: string;
        fontWeightLight: fontWeight;
        fontWeightRegular: fontWeight;
        fontWeightMedium: fontWeight;
        fontWeightBold: fontWeight;
        headlineFontFamily: string;
        h1: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        h2: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        h3: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        h4: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        h5: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        bodyFontFamily: string;
        bodyJumbo: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        body: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        bodyBold: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        bodySmall: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        bodySmallBold: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        bodyMicro: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        notification: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        notificationBold: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        attributionFontFamily: string;
        quote: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: fontWeight;
        };
        author: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        codeFontFamily: string;
        code: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            contrastBackgroundColor: Color;
            contrastColor: Color;
            padding: Spacing;
        };
    };
    link: {
        color: Color;
        activeColor: Color;
        decoration: string;
        contrastColor: Color;
        contrastActiveColor: Color;
        hover: {
            color: Color;
            decoration: string;
            contrastColor: Color;
        };
    };
    shape: {
        borderRadius: number;
    };
    spacing: {
        xxs: Spacing;
        xs: Spacing;
        sm: Spacing;
        md: Spacing;
        lg: Spacing;
        xl: Spacing;
        xxl: Spacing;
    };
    button: Button;
}
