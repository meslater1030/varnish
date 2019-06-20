import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { PageTitle } from '../Shared';
import { H2, H3, BodyJumbo, Body, BodyMicro } from '../../../lib/components';
import { DefaultVarnishTheme, ColorInfo } from '../../../lib/theme';
import { hexToRgb, convertPixelsToRem } from '../../../lib/utils';

const { colors } = DefaultVarnishTheme;
const colorGroups = {
    reds: [
        colors.R1,
        colors.R2,
        colors.R3,
        colors.R4,
        colors.R5,
        colors.R6,
        colors.R7,
        colors.R8,
        colors.R9,
        colors.R10
    ],
    oranges: [
        colors.O1,
        colors.O2,
        colors.O3,
        colors.O4,
        colors.O5,
        colors.O6,
        colors.O7,
        colors.O8,
        colors.O9,
        colors.O10
    ],
    greens: [
        colors.G1,
        colors.G2,
        colors.G3,
        colors.G4,
        colors.G5,
        colors.G6,
        colors.G7,
        colors.G8,
        colors.G9,
        colors.G10
    ],
    teals: [
        colors.T1,
        colors.T2,
        colors.T3,
        colors.T4,
        colors.T5,
        colors.T6,
        colors.T7,
        colors.T8,
        colors.T9,
        colors.T10
    ],
    blues: [
        colors.B1,
        colors.B2,
        colors.B3,
        colors.B4,
        colors.B5,
        colors.B6,
        colors.B7,
        colors.B8,
        colors.B9,
        colors.B10
    ],
    purples: [
        colors.P1,
        colors.P2,
        colors.P3,
        colors.P4,
        colors.P5,
        colors.P6,
        colors.P7,
        colors.P8,
        colors.P9,
        colors.P10
    ],
    magentas: [
        colors.M1,
        colors.M2,
        colors.M3,
        colors.M4,
        colors.M5,
        colors.M6,
        colors.M7,
        colors.M8,
        colors.M9,
        colors.M10
    ],
    neutrals: [
        colors.N1,
        colors.N2,
        colors.N3,
        colors.N4,
        colors.N5,
        colors.N6,
        colors.N7,
        colors.N8,
        colors.N9,
        colors.N10
    ]
};

export class Colors extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Colors</PageTitle>

                <H3>Primary</H3>
                <PrimaryGrid>
                    {[DefaultVarnishTheme.palette.primary,
                    DefaultVarnishTheme.palette.primary2,
                    DefaultVarnishTheme.palette.primary3,
                    DefaultVarnishTheme.palette.primary4].map((colorInfo: ColorInfo) =>
                        <PrimaryColor key={colorInfo.displayName} colorInfo={colorInfo} />
                    )}
                </PrimaryGrid>

                <H3>Extended</H3>
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
    grid-gap: ${props => `0 ${convertPixelsToRem(24)}rem`};
    align-items: center;
    margin-top: ${props => `${convertPixelsToRem(23)}rem`};
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
    height: ${props => `${convertPixelsToRem(76)}rem`};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`};
    grid-column: 1 / span 3;
`;

const MicroCol = styled(BodyMicro)`
    background: ${({theme}) => theme.colors.N2.value};
    padding: ${props => `${convertPixelsToRem(17)}rem`};
`;

const PrimaryColorName = styled(MicroCol)`
    grid-column: 1;
    padding-right: 0;
`;

const PrimaryColorHex = styled(MicroCol)`
    grid-column: 2;
    text-align: center;
    padding: ${props => `${convertPixelsToRem(17)}rem ${convertPixelsToRem(6)}rem`};
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
    margin-top: ${props => `${convertPixelsToRem(7)}rem`};
`;

const ExtendedHeadRow = styled.div`
    grid-column: 1 / span 4;
    align-self: end;
    padding-bottom: ${props => `${convertPixelsToRem(24)}rem`};
`;

const Label = styled(BodyJumbo)`
    text-transform: capitalize;
`;

const Col = styled(Body)`
    padding: ${props => `${convertPixelsToRem(21)}rem 0`};
    display: inline-block;
    border-top: 1px solid ${({theme}) => theme.colors.N4.value};
`;

const ColorBox = styled.div`
    background: ${(props) => props.color};
    width: ${props => `${convertPixelsToRem(40)}rem`};
    height: ${props => `${convertPixelsToRem(40)}rem`};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
`;

const ColorBoxWrapper = styled(Col)`
    padding: ${props => `${convertPixelsToRem(12)}rem`};
    grid-column: 1;
`;

const ColorName = styled(Col)`
    padding-left: ${props => `${convertPixelsToRem(9)}rem`};
    grid-column: 2;
`;

const ColorHex = styled(Col)`
    grid-column: 3;
`;

const ColorRgb = styled(Col)`
    grid-column: 4;
`;
