import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { Paragraph, H3, H4, BodySmall, Body, TextLink, TextLinkContrast } from '../../../lib/components';
import { DefaultVarnishTheme } from '../../../lib/theme';
import { convertPixelsToRem } from '../../../lib/utils';
import { PageTitle } from '../Shared';

export class TextLinks extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Text Links</PageTitle>

                <H3>Appearance and Behavor</H3>
                <BodySmall>
                    Basic text links come in two styles: light background and dark background.
                </BodySmall>
                <SectionDivider />
                <TextLinkExample isDark={false} />
                <SectionDivider />
                <TextLinkExample isDark={true} />
            </React.Fragment>
        )
    }
}

interface TextLinkExampleProps{
    isDark: boolean;
}
class TextLinkExample extends React.PureComponent<TextLinkExampleProps> {
    render() {
        const color = this.props.isDark
            ? DefaultVarnishTheme.textLink.contrastColor
            : DefaultVarnishTheme.textLink.color;
        const Text = this.props.isDark ? DarkBody : LightBody;
        return (
            <React.Fragment>
                <H4>{this.props.isDark ? 'Dark' : 'Light'} background</H4>
                <BodySmall>
                    <ul>
                        <li>Basic text links are defined with the color {color.displayName}.</li>
                        <li>On hover, they do not change color, but show an underline.</li>
                        <li>Visited sites do not change color from {color.displayName}.</li>
                    </ul>
                </BodySmall>
                <Body>Example</Body>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
                    metus. <TextLink dark={this.props.isDark}>Suspendisse pharetra</TextLink>
                    lobortis varius. Cras vulputate felis et mauris tincidunt, elementum volutpat
                    urna euismod. Phasellus lacinia fringilla sapien. Quisque ac convallis elit,
                    eget fringilla metus.
                </Text>
            </React.Fragment>
        )
    }
}

const SectionDivider = styled.div`
    padding-bottom: ${props => `${convertPixelsToRem(38)}rem`};
    margin-bottom: ${props => `${convertPixelsToRem(38)}rem`};
    border-bottom: 1px solid ${({theme}) => theme.colors.N4.value};
`;

const LightBody = styled(BodySmall)`
    display: inline-block;
    padding-right: ${props => `${convertPixelsToRem(32)}rem`};
    margin-top: ${props => `${convertPixelsToRem(16)}rem`};
`;

const DarkBody = styled(LightBody)`
    background: ${({theme}) => theme.colors.B9.value};
    padding: ${props => `${convertPixelsToRem(16)}rem`};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
    color: ${({theme}) => theme.palette.white};
`;
