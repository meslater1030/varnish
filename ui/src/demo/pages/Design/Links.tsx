import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { BodySmall, Body, ExternalLink } from '../../../lib/components';
import { DefaultVarnishTheme } from '../../../lib/theme';
import { PageTitle } from '../Shared';

export class Links extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Links</PageTitle>

                <h3>Appearance and Behavor</h3>
                <BodySmall>
                    Basic links come in two styles: light background and dark background.
                </BodySmall>
                <SectionDivider />
                <LinkExample inverse={false} />
                <SectionDivider />
                <LinkExample inverse={true} />
            </React.Fragment>
        )
    }
}

interface LinkExampleProps{
    inverse: boolean;
}
class LinkExample extends React.PureComponent<LinkExampleProps> {
    render() {
        const color = this.props.inverse
            ? DefaultVarnishTheme.link.contrastColor
            : DefaultVarnishTheme.link.color;
        const Text = this.props.inverse ? DarkBody : LightBody;
        return (
            <React.Fragment>
                <h4>{this.props.inverse ? 'Dark' : 'Light'} background</h4>
                <BodySmall>
                    <ul>
                        <li>Basic links are defined with the color {color.displayName}.</li>
                        <li>On hover, they do not change color, but show an underline.</li>
                        <li>Visited sites do not change color from {color.displayName}.</li>
                    </ul>
                </BodySmall>
                <Body>Example</Body>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
                    metus. <ExternalLink inverse={this.props.inverse}>Suspendisse pharetra</ExternalLink>
                    {' '}lobortis varius. Cras vulputate felis et mauris tincidunt, elementum
                    volutpat <ExternalLink inverse={this.props.inverse}>urna euismod</ExternalLink>.
                    Phasellus lacinia fringilla sapien. Quisque ac convallis elit, eget fringilla
                    metus.
                </Text>
            </React.Fragment>
        )
    }
}

const SectionDivider = styled.div`
    padding-bottom: ${({theme}) => theme.spacing.xl};
    margin-bottom: ${({theme}) => theme.spacing.xl};
    border-bottom: 1px solid ${({theme}) => theme.palette.border.default};
`;

const LightBody = styled(BodySmall)`
    display: inline-block;
    padding-right: ${({theme}) => theme.spacing.lg};
    margin-top: ${({theme}) => theme.spacing.md};
`;

const DarkBody = styled(LightBody)`
    background: ${({theme}) => theme.palette.background.dark};
    padding: ${({theme}) => theme.spacing.sm};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
    color: ${({theme}) => theme.palette.common.white};
`;
