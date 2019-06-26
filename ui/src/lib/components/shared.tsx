import * as React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

import { convertPixelsToRem } from '../utils/base';

export const Spacer = styled.div`
    display: flex;
    flex-grow: 1;
`

export const MaxWidth = styled.div`
    max-width: ${({theme}) => theme.breakpoints.xl};
`

export const TransparentLayout = styled(Layout)`
    && {
        background: none;
    }
`;

export const TopMenu = styled(Menu).attrs({
    mode: "horizontal"
})`
    && {
        display: flex;
        line-height: 77px;
    }
`;

export const LeftMenu = styled(Menu).attrs({
    mode: "inline"
})`
`;

// todo: left sider does should move up when ai2logo disappears
export const LeftSider = styled(Layout.Sider).attrs({
    breakpoint: "sm",
    collapsedWidth: 0
})`
    && {
        background: none;
        overflow: auto;
        height: 100vh;
        position: fixed;
        left: 0;
        ul {
            height: 100%;
        }
    }
`;

export const PaddedContent = styled(Layout.Content)`
    && {
        padding: ${({theme}) => `0 ${theme.spacing.xxl}`};
    }
`;

export const Page = styled.div`
    background: ${({theme}) => theme.palette.common.white};
    padding: ${({theme}) => theme.spacing.lg};
    border-bottom: 1px solid ${({theme}) => theme.palette.border.main};
`;
