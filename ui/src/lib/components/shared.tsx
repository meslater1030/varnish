import * as React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

import { convertPixelsToRem } from '../utils/base';
import { spacing } from '../theme/spacing';


export const MaxWidth = styled.div`
    max-width: ${({theme}) => theme.breakpoints.xl}px;
`

export const TransparentLayout = styled(Layout)`
    && {
        background: none;
    }
`;

export const Header = styled(Layout.Header)`
    && {
        position: fixed;
        background: white;
        z-index: 1;
        width: 100%;
        box-shadow: 0px 4px 16px rgba(10, 41, 57, 0.08);
        padding-top: ${props => convertPixelsToRem(10)};
        padding-bottom: ${props => convertPixelsToRem(11)};
        height: ${props => convertPixelsToRem(98)};
    }
`;

export const TopMenu = styled(Menu).attrs({
    mode: "horizontal"
})`
    && {
        line-height: ${props => convertPixelsToRem(86)};
        float: right;
    }
`;

export const LeftMenu = styled(Menu).attrs({
    mode: "inline"
})`
`;

export const LeftSider = styled(Layout.Sider).attrs({
    breakpoint: "sm",
    collapsedWidth: 0
})`
    && {
        margin-top: ${props => convertPixelsToRem(98)};
        background: none;
        overflow: auto;
        height: 100vh;
        position: fixed;
        left: 0;
    }
`;

export const PaddedContent = styled(Layout.Content)`
    && {
        padding: ${props => `0 ${spacing.xxl}`};
        margin-top: ${props => convertPixelsToRem(98)};
    }
`;

export const Page = styled.div`
    background: ${({theme}) => theme.palette.common.white};
    padding: ${({theme}) => theme.spacing.lg};
    border-bottom: 1px solid ${({theme}) => theme.palette.border.default};
`;

export const CenteredFooter = styled(Layout.Footer)`
    && {
        text-align: center;
        background: none;
    }
`;
