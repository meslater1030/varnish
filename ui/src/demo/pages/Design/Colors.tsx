import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { PageTitle } from '../Shared';
import { BodyJumbo, Body, BodyMicro } from '../../../lib/components';
import { DefaultVarnishTheme, ColorInfo } from '../../../lib/theme';
import { hexToRgb, convertPixelsToRemStr } from '../../../lib/utils/base';

const { colorInfo } = DefaultVarnishTheme;
const colorGroups = {
    reds: [
        colorInfo.R1,
        colorInfo.R2,
        colorInfo.R3,
        colorInfo.R4,
        colorInfo.R5,
        colorInfo.R6,
        colorInfo.R7,
        colorInfo.R8,
        colorInfo.R9,
        colorInfo.R10
    ],
    oranges: [
        colorInfo.O1,
        colorInfo.O2,
        colorInfo.O3,
        colorInfo.O4,
        colorInfo.O5,
        colorInfo.O6,
        colorInfo.O7,
        colorInfo.O8,
        colorInfo.O9,
        colorInfo.O10
    ],
    greens: [
        colorInfo.G1,
        colorInfo.G2,
        colorInfo.G3,
        colorInfo.G4,
        colorInfo.G5,
        colorInfo.G6,
        colorInfo.G7,
        colorInfo.G8,
        colorInfo.G9,
        colorInfo.G10
    ],
    teals: [
        colorInfo.T1,
        colorInfo.T2,
        colorInfo.T3,
        colorInfo.T4,
        colorInfo.T5,
        colorInfo.T6,
        colorInfo.T7,
        colorInfo.T8,
        colorInfo.T9,
        colorInfo.T10
    ],
    blues: [
        colorInfo.B1,
        colorInfo.B2,
        colorInfo.B3,
        colorInfo.B4,
        colorInfo.B5,
        colorInfo.B6,
        colorInfo.B7,
        colorInfo.B8,
        colorInfo.B9,
        colorInfo.B10
    ],
    purples: [
        colorInfo.P1,
        colorInfo.P2,
        colorInfo.P3,
        colorInfo.P4,
        colorInfo.P5,
        colorInfo.P6,
        colorInfo.P7,
        colorInfo.P8,
        colorInfo.P9,
        colorInfo.P10
    ],
    magentas: [
        colorInfo.M1,
        colorInfo.M2,
        colorInfo.M3,
        colorInfo.M4,
        colorInfo.M5,
        colorInfo.M6,
        colorInfo.M7,
        colorInfo.M8,
        colorInfo.M9,
        colorInfo.M10
    ],
    neutrals: [
        colorInfo.N1,
        colorInfo.N2,
        colorInfo.N3,
        colorInfo.N4,
        colorInfo.N5,
        colorInfo.N6,
        colorInfo.N7,
        colorInfo.N8,
        colorInfo.N9,
        colorInfo.N10
    ]
};

export class Colors extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Colors</PageTitle>

                <h3>Primary</h3>
                <PrimaryGrid>
                    {[DefaultVarnishTheme.palette.primary,
                    DefaultVarnishTheme.palette.primary2,
                    DefaultVarnishTheme.palette.primary3,
                    DefaultVarnishTheme.palette.primary4].map((colorInfo: ColorInfo) =>
                        <PrimaryColor key={colorInfo.displayName} colorInfo={colorInfo} />
                    )}
                </PrimaryGrid>

                <h3>Extended</h3>
                <ExtendedGrid>
                    {Object.keys(colorGroups).map((group: string) =>
                        <ColorGroup key={group} colorInfos={colorGroups[group]} group={group} />
                    )}
                </ExtendedGrid>
            </React.Fragment>
        )
    }
}

interface PrimaryColorProps {
    colorInfo: ColorInfo;
}

class PrimaryColor extends React.PureComponent<PrimaryColorProps> {
    render() {
        const rgb = hexToRgb(this.props.colorInfo.value);
        return (
            <PrimaryColorGrid>
                <PrimaryColorBox color={this.props.colorInfo.value} />
                <PrimaryColorName>{this.props.colorInfo.displayName}</PrimaryColorName>
                <PrimaryColorHex>{this.props.colorInfo.value}</PrimaryColorHex>
                {rgb
                    ? <PrimaryColorRgb>{rgb.r}, {rgb.g}, {rgb.b}</PrimaryColorRgb>
                    : null}
            </PrimaryColorGrid>
        )
    }
}

interface ColorGroupProps {
    colorInfos: ColorInfo[];
    group: string;
}

class ColorGroup extends React.PureComponent<ColorGroupProps> {
    render() {
        return (
        <React.Fragment>
            <ExtendedHeadRow>
                <Label>{this.props.group}</Label>
            </ExtendedHeadRow>
            {this.props.colorInfos.reverse().map((col: ColorInfo) => {
                return col ? <ColorRow key={col.displayName} colorInfo={col}/>
                : null;
            })}
        </React.Fragment>
    )}
}

interface ColorRowProps {
    colorInfo: ColorInfo;
}

class ColorRow extends React.PureComponent<ColorRowProps> {
    render() {
        const rgb = hexToRgb(this.props.colorInfo.value);
        return (
            <React.Fragment>
                <ColorBoxWrapper><ColorBox color={this.props.colorInfo.value} /></ColorBoxWrapper>
                <ColorName>{this.props.colorInfo.displayName}</ColorName>
                <ColorHex>{this.props.colorInfo.value}</ColorHex>
                {rgb
                    ? <ColorRgb>{rgb.r}, {rgb.g}, {rgb.b}</ColorRgb>
                    : null}
            </React.Fragment>
        )
    }
}

const PrimaryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: ${({theme}) => `0 ${theme.spacing.lg}`};
    align-items: center;
    margin-top: ${({theme}) => theme.spacing.lg};
`;

const PrimaryColorGrid = styled.div`
    display: grid;
    grid-template-columns: max-content auto max-content;
    align-items: center;
    grid-template-rows: repeat(2, max-content);
    margin-bottom: 75px;
`;

const PrimaryColorBox = styled.div`
    background: ${(props) => props.color};
    width: 100%;
    height: ${props => convertPixelsToRemStr(76)};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`};
    grid-column: 1 / span 3;
`;

const MicroCol = styled(BodyMicro)`
    background: ${({theme}) => theme.color.N2};
    padding: ${({theme}) => theme.spacing.md};
`;

const PrimaryColorName = styled(MicroCol)`
    grid-column: 1;
    padding-right: 0;
`;

const PrimaryColorHex = styled(MicroCol)`
    grid-column: 2;
    text-align: center;
    padding: ${({theme}) => `${theme.spacing.md} ${theme.spacing.xs}`};
`;

const PrimaryColorRgb = styled(MicroCol)`
    grid-column: 3;
    padding-left: 0;
`;

const ExtendedGrid = styled.div`
    display: grid;
    grid-template-columns: max-content repeat(3, auto);
    align-items: center;
    grid-template-rows:
        75px repeat(10, auto)
        75px repeat(10, auto)
        75px repeat(10, auto)
        75px repeat(10, auto)
        75px repeat(10, auto)
        75px repeat(10, auto)
        75px repeat(10, auto)
        75px repeat(10, auto);
    margin-top: ${({theme}) => theme.spacing.xs};
`;

const ExtendedHeadRow = styled.div`
    grid-column: 1 / span 4;
    align-self: end;
    padding-bottom: ${({theme}) => theme.spacing.lg};
`;

const Label = styled(BodyJumbo)`
    text-transform: capitalize;
`;

const Col = styled(Body)`
    padding: ${({theme}) => `${theme.spacing.lg} 0`};
    display: inline-block;
    border-top: 1px solid ${({theme}) => theme.color.N4};
`;

const ColorBox = styled.div`
    background: ${(props) => props.color};
    width: ${props => convertPixelsToRemStr(40)};
    height: ${props => convertPixelsToRemStr(40)};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
`;

const ColorBoxWrapper = styled(Col)`
    padding: ${({theme}) => convertPixelsToRemStr(15)};
    grid-column: 1;
`;

const ColorName = styled(Col)`
    padding-left: ${({theme}) => theme.spacing.xs};
    grid-column: 2;
`;

const ColorHex = styled(Col)`
    grid-column: 3;
`;

const ColorRgb = styled(Col)`
    grid-column: 4;
`;
