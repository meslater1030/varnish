import * as React from 'react';
import styled from 'styled-components';
import * as Antd from 'antd';

export const TextArea = styled(Antd.Input.TextArea)`
    padding: ${({theme}) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({theme}) => theme.typography.bodySmall.fontSize};
`;

export const Input = styled(Antd.Input)`
    padding: ${({theme}) => `${theme.spacing.xs} ${theme.spacing.md}`};
    height: initial;
    font-size: ${({theme}) => theme.typography.bodySmall.fontSize};
`;

export const DatePicker = styled(Antd.DatePicker)`
    width: 100%;

    input {
        padding: ${({theme}) => `${theme.spacing.xs} ${theme.spacing.md}`};
        height: initial;
        font-size: ${({theme}) => theme.typography.bodySmall.fontSize};
    }
`;

export const SelectWithSpace = styled(Antd.Select)`
    font-size: ${({theme}) => theme.typography.bodySmall.fontSize};

    /* todo: figure out why ant is not doing this */
    .ant-select-selection__rendered, .ant-select-arrow {
        margin-right: ${({theme}) => theme.spacing.xs};
        margin-left: ${({theme}) => theme.spacing.xs};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
        margin: ${({theme}) => `0 0 ${theme.spacing.md}`};
    }
`;
