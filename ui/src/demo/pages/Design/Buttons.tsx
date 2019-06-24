import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { BodySmall, Body, Button, ButtonTypes } from '../../../lib/components';
import { DefaultVarnishTheme } from '../../../lib/theme';
import { defaultSpacing, borderColor } from '../../../lib/theme/button';
import { PageTitle, SectionDivider, LightPaper, DarkPaper } from '../Shared';

export class Buttons extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Buttons</PageTitle>

                <h3>Appearance and Behavor</h3>
                <BodySmall>
                    Basic buttons come in four style types: primary, default, link, and marketing.
                </BodySmall>

                <SectionDivider />

                <h5>Basic Button Specs</h5>
                <BodySmall>
                    <ul>
                        <li>Height: {DefaultVarnishTheme.button.default.height}</li>
                        <li>Border radius: {`${DefaultVarnishTheme.shape.borderRadius}px`}</li>
                        <li>Side padding: {`${defaultSpacing.displayName} (${defaultSpacing})`}</li>
                        <li>Border Color: {borderColor}</li>
                        <li>Dark Text: {DefaultVarnishTheme.button.default.contrastColor.displayName}</li>
                        <li>Light Text: {DefaultVarnishTheme.button.default.color.displayName}</li>
                    </ul>
                </BodySmall>

                <SectionDivider />

                <h4>Primary-style buttons</h4>
                <BodySmall>
                    <ul>
                        <li>Use the primary button style for the most prominent call to action on the page.</li>
                        <li>These buttons guide users to and through the main happy path in a task flow.</li>
                        <li>Background Color: {DefaultVarnishTheme.button.primary.background.displayName}</li>
                    </ul>
                </BodySmall>
                <ButtonExample type={'primary'} />

                <SectionDivider />

                <h4>Default-style buttons</h4>
                <BodySmall>
                    <ul>
                        <li>Use the secondary button style for buttons that offer users additional
                            action they can take in their task flow (examples: Cancel, Back).
                        </li>
                        <li>You can have only one primary-styled button on a screen, but you can
                            have more than one secondary-styled button. If you need to offer more
                            than one alternate action, consider using text links instead of multiple
                            secondary buttons.
                        </li>
                    </ul>
                </BodySmall>
                <ButtonExample type={'default'} />

                <SectionDivider />

                <h4>Link-style buttons</h4>
                <BodySmall>
                    <ul>
                        <li>If you need to offer more than one alternate action, consider using text
                            links instead of multiple secondary buttons.
                        </li>
                        <li>Bright Text: {DefaultVarnishTheme.button.link.color.displayName}</li>
                    </ul>
                </BodySmall>
                <ButtonExample type={'link'} />

                <SectionDivider />

                <h4>Marketing-style buttons</h4>
                <BodySmall>
                    <ul>
                        <li>Use only in marketing as an extra-large primary button for an important
                            action.
                        </li>
                        <li>Only one jumbo button can exist on a page or screen.</li>
                        <li>Bright Text: {DefaultVarnishTheme.button.marketing.color.displayName}</li>
                    </ul>
                </BodySmall>
                <ButtonExample type={'marketing'} />
            </React.Fragment>
        )
    }
}

interface ButtonExampleProps{
    type: ButtonTypes;
}
class ButtonExample extends React.PureComponent<ButtonExampleProps> {
    render() {
        return (
            <React.Fragment>
                <ButtonRow type={this.props.type} />
                <ButtonRow type={this.props.type} contrast />
            </React.Fragment>
        )
    }
}


interface ButtonRowProps{
    type: ButtonTypes;
    contrast: boolean;
}
class ButtonRow extends React.PureComponent<ButtonRowProps> {
    render() {
        const color = this.props.contrast
        ? DefaultVarnishTheme.link.contrastColor
        : DefaultVarnishTheme.link.color;
        const Paper = styled(this.props.contrast ? DarkPaper : LightPaper)`
            margin-bottom: ${({theme}) => theme.spacing.md};`;
        const { type, contrast } = this.props;
        return (
            <React.Fragment>
                <Body>{this.props.contrast ? 'Dark' : 'Light'} background</Body>
                <Paper>
                    <ButtonGrid>
                        <Disabled>
                            <Button disabled type={type} contrast={contrast}>
                                Disabled
                            </Button>
                        </Disabled>
                        <Default>
                            <Button type={type} contrast={contrast}>
                                Default
                            </Button>
                        </Default>
                    </ButtonGrid>
                </Paper>
            </React.Fragment>
        )
    }
}

const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    grid-gap: ${({theme}) => theme.spacing.lg};
`;

const ButtonSpace = styled.div``;
const Disabled = styled(ButtonSpace)`
    grid-column: 1;
`;
const Default = styled(ButtonSpace)`
    grid-column: 2;
`;
