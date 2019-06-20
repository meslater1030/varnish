import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { BodySmall, Body, TextLink } from '../../../lib/components';
import { DefaultVarnishTheme } from '../../../lib/theme';
import { PageTitle } from '../Shared';

export class TextLinks extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Text Links</PageTitle>

                <h3>Appearance and Behavor</h3>
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
                <h4>{this.props.isDark ? 'Dark' : 'Light'} background</h4>
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
                    {' '}<TextLink dark={this.props.isDark}>urna euismod</TextLink>. Phasellus
                    lacinia fringilla sapien. Quisque ac convallis elit, eget fringilla metus.
                </Text>
            </React.Fragment>
        )
    }
}

const SectionDivider = styled.div`
    padding-bottom: ${({theme}) => theme.spacing.xl};
    margin-bottom: ${({theme}) => theme.spacing.xl};
    border-bottom: 1px solid ${({theme}) => theme.color.N4};
`;

const LightBody = styled(BodySmall)`
    display: inline-block;
    padding-right: ${({theme}) => theme.spacing.xl};
    margin-top: ${({theme}) => theme.spacing.md};
`;

const DarkBody = styled(LightBody)`
    background: ${({theme}) => theme.color.B9};
    padding: ${({theme}) => theme.spacing.md};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
    color: ${({theme}) => theme.palette.white};
`;
