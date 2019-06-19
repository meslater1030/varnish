import * as React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

import { convertPixelsToRem } from '../utils';


export const MaxWidth = styled.div`
    max-width: ${({theme}) => theme.breakpoints.xl}px;
`

// TODO: this is a placeholder until we get spacing in styleguide
export const Paragraph = styled.div`
    && {
        margin: 0 0 2rem;
    }
`;

// TODO: this is a placeholder till i implement links from styleguide
export const ExternalLink = styled.a`
    color: ${({theme}) => theme.colors.B7.value};
    &:hover {
        background: ${({theme}) => theme.colors.B3.value};
    }
`;

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
        padding-top: ${props => `${convertPixelsToRem(10)}rem`};
        padding-bottom: ${props => `${convertPixelsToRem(11)}rem`};
        height: ${props => `${convertPixelsToRem(98)}rem`};
    }
`;

export const TopMenu = styled(Menu).attrs({
    mode: "horizontal"
})`
    && {
        line-height: ${props => `${convertPixelsToRem(86)}rem`};
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
        margin-top: ${props => `${convertPixelsToRem(98)}rem`};
        background: none;
        overflow: auto;
        height: 100vh;
        position: fixed;
        left: 0;
    }
`;

export const PaddedContent = styled(Layout.Content)`
    && {
        padding: ${props => `0 ${convertPixelsToRem(50)}rem`};
        margin-top: ${props => `${convertPixelsToRem(98)}rem`};
    }
`;

export const Page = styled.div`
    background: ${({theme}) => theme.palette.white};
    padding: ${props => `${convertPixelsToRem(24)}rem`};
    border-bottom: 1px solid ${({theme}) => theme.colors.N4.value};
`;

export const CenteredFooter = styled(Layout.Footer)`
    && {
        text-align: center;
        background: none;
    }
`;
