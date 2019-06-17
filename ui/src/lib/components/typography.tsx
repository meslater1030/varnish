import * as React from 'react';
import styled from 'styled-components';

// headlines
export const Headline1 = styled.div`
    font-family: ${({theme}) => theme.typography.headline1.fontFamily};
    font-size: ${({theme}) => theme.typography.headline1.fontSize};
    line-height: ${({theme}) => theme.typography.headline1.lineHeight};
    font-weight: ${({theme}) => theme.typography.headline1.fontWeight};
`;

export const Headline2 = styled.div`
    font-family: ${({theme}) => theme.typography.headline2.fontFamily};
    font-size: ${({theme}) => theme.typography.headline2.fontSize};
    line-height: ${({theme}) => theme.typography.headline2.lineHeight};
    font-weight: ${({theme}) => theme.typography.headline2.fontWeight};
`;

export const Headline3 = styled.div`
    font-family: ${({theme}) => theme.typography.headline3.fontFamily};
    font-size: ${({theme}) => theme.typography.headline3.fontSize};
    line-height: ${({theme}) => theme.typography.headline3.lineHeight};
    font-weight: ${({theme}) => theme.typography.headline3.fontWeight};
`;

export const Headline4 = styled.div`
    font-family: ${({theme}) => theme.typography.headline4.fontFamily};
    font-size: ${({theme}) => theme.typography.headline4.fontSize};
    line-height: ${({theme}) => theme.typography.headline4.lineHeight};
    font-weight: ${({theme}) => theme.typography.headline4.fontWeight};
`;

export const Headline5 = styled.div`
    font-family: ${({theme}) => theme.typography.headline5.fontFamily};
    font-size: ${({theme}) => theme.typography.headline5.fontSize};
    line-height: ${({theme}) => theme.typography.headline5.lineHeight};
    font-weight: ${({theme}) => theme.typography.headline5.fontWeight};
    text-transform: uppercase;
`;

// body
export const BodyJumbo = styled.span`
    font-family: ${({theme}) => theme.typography.bodyJumbo.fontFamily};
    font-size: ${({theme}) => theme.typography.bodyJumbo.fontSize};
    line-height: ${({theme}) => theme.typography.bodyJumbo.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodyJumbo.fontWeight};
`;

export const BodyBig = styled.span`
    font-family: ${({theme}) => theme.typography.bodyBig.fontFamily};
    font-size: ${({theme}) => theme.typography.bodyBig.fontSize};
    line-height: ${({theme}) => theme.typography.bodyBig.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodyBig.fontWeight};
`;
export const BodyBigBold = styled.span`
    font-family: ${({theme}) => theme.typography.bodyBigBold.fontFamily};
    font-size: ${({theme}) => theme.typography.bodyBigBold.fontSize};
    line-height: ${({theme}) => theme.typography.bodyBigBold.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodyBigBold.fontWeight};
`;

export const BodySmall = styled.span`
    font-family: ${({theme}) => theme.typography.bodySmall.fontFamily};
    font-size: ${({theme}) => theme.typography.bodySmall.fontSize};
    line-height: ${({theme}) => theme.typography.bodySmall.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodySmall.fontWeight};
`;
export const BodySmallBold = styled.span`
    font-family: ${({theme}) => theme.typography.bodySmallBold.fontFamily};
    font-size: ${({theme}) => theme.typography.bodySmallBold.fontSize};
    line-height: ${({theme}) => theme.typography.bodySmallBold.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodySmallBold.fontWeight};
`;

export const BodyMicro = styled.span`
    font-family: ${({theme}) => theme.typography.bodyMicro.fontFamily};
    font-size: ${({theme}) => theme.typography.bodyMicro.fontSize};
    line-height: ${({theme}) => theme.typography.bodyMicro.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodyMicro.fontWeight};
`;

export const Notification = styled.span`
    font-family: ${({theme}) => theme.typography.notification.fontFamily};
    font-size: ${({theme}) => theme.typography.notification.fontSize};
    line-height: ${({theme}) => theme.typography.notification.lineHeight};
    font-weight: ${({theme}) => theme.typography.notification.fontWeight};
`;
export const NotificationBold = styled.span`
    font-family: ${({theme}) => theme.typography.notificationBold.fontFamily};
    font-size: ${({theme}) => theme.typography.notificationBold.fontSize};
    line-height: ${({theme}) => theme.typography.notificationBold.lineHeight};
    font-weight: ${({theme}) => theme.typography.notificationBold.fontWeight};
`;

// attribution
export const Quote = styled.span`
    font-family: ${({theme}) => theme.typography.quote.fontFamily};
    font-size: ${({theme}) => theme.typography.quote.fontSize};
    line-height: ${({theme}) => theme.typography.quote.lineHeight};
    font-weight: ${({theme}) => theme.typography.quote.fontWeight};
`;

export const Author = styled.span`
    font-family: ${({theme}) => theme.typography.author.fontFamily};
    font-size: ${({theme}) => theme.typography.author.fontSize};
    line-height: ${({theme}) => theme.typography.author.lineHeight};
    font-weight: ${({theme}) => theme.typography.author.fontWeight};
`;

// code
export const Code = styled.pre`
    font-family: ${({theme}) => theme.typography.code.fontFamily};
    font-size: ${({theme}) => theme.typography.code.fontSize};
    line-height: ${({theme}) => theme.typography.code.lineHeight};
    font-weight: ${({theme}) => theme.typography.code.fontWeight};
`;

export const CodeDark = styled.pre`
    font-family: ${({theme}) => theme.typography.codeDark.fontFamily};
    font-size: ${({theme}) => theme.typography.codeDark.fontSize};
    line-height: ${({theme}) => theme.typography.codeDark.lineHeight};
    font-weight: ${({theme}) => theme.typography.codeDark.fontWeight};
    background-color: ${({theme}) => theme.colors[theme.typography.codeDark.backgroundColorKey].value};
    color: ${({theme}) => theme.colors[theme.typography.codeDark.colorKey].value};
    padding: ${({theme}) => theme.typography.codeDark.padding};
`;
