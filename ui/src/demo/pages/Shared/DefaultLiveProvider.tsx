import React from 'react';
import styled, { css } from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const StyledProvider = styled(LiveProvider)`
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
    overflow: hidden;
    margin-bottom: ${({theme}) => theme.spacing.md};
`;

const LiveWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    border: 1px solid ${({theme}) => theme.palette.border.main};

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

const column = css`
    flex-basis: 50%;
    width: 50%;
    max-width: 50%;

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
    }
`;

const StyledEditor = styled.div<{maxHeight?: string}>`
    background: ${({theme}) => theme.palette.background.dark};
    max-height: ${({maxHeight})=> maxHeight};
    overflow: auto;
    ${column};

    * > textarea {
        font-family: ${({theme}) => theme.typography.code.fontFamily};
        font-size: ${({theme}) => theme.typography.code.fontSize};
        line-height: ${({theme}) => theme.typography.code.lineHeight};

        &:focus {
            outline: none;
        }
    }
`;

const StyledPreview = styled(LivePreview)<{maxHeight?: string}>`
    background: ${({theme}) => theme.palette.background.light};
    position: relative;
    padding: ${({theme}) => theme.spacing.xs};
    overflow: auto;
    max-height: ${({maxHeight})=> maxHeight};
    ${column};
`;

const StyledError = styled(LiveError)`
    display: block;
    padding: ${({theme}) => theme.spacing.sm};
    background: ${({theme}) => theme.palette.text.error};
    color: ${({theme}) => theme.palette.text.contrast};
    white-space: pre-wrap;
    text-align: left;
    font-family: ${({theme}) => theme.typography.code.fontFamily};
    font-size: ${({theme}) => theme.typography.code.fontSize};
    line-height: ${({theme}) => theme.typography.code.lineHeight};
`;

interface Props {
    code?: string;
    scope?: any;
    noInline?: boolean;
    maxHeight?: string;
}
const DefaultLiveProvider = (props: Props) => {
    const maxHeight = props.maxHeight || "15rem"; // default
    return (
        <StyledProvider {...props}>
            <LiveWrapper>
            <StyledEditor maxHeight={maxHeight}>
                <LiveEditor />
            </StyledEditor>
            <StyledPreview maxHeight={maxHeight}/>
            </LiveWrapper>
            <StyledError />
        </StyledProvider>
    )
};

export { DefaultLiveProvider };
