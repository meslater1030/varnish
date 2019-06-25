import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { BodySmall, Body, Button, ButtonType } from '../../../lib/components';
import { DefaultVarnishTheme } from '../../../lib/theme';
import { defaultSpacing, borderColor } from '../../../lib/theme/button';
import { PageTitle, SectionWithDivider, LightPaper, DarkPaper } from '../Shared';

export class Buttons extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Buttons</PageTitle>

                <h3>Appearance and Behavor</h3>
                <BodySmall>
                    Basic buttons come in four style types: primary, default, link, and marketing.
                </BodySmall>

                <SectionWithDivider>
                    <h5>Basic Button Specs</h5>
                    <BodySmall>
                        <ul>
                            <li>Border radius: {`${DefaultVarnishTheme.shape.borderRadius}px`}</li>
                            <li>Horizontal padding: {`${defaultSpacing[0].displayName} (${defaultSpacing[0]})`}</li>
                            <li>Vertical padding: {`${defaultSpacing[1].displayName} (${defaultSpacing[1]})`}</li>
                            <li>Border color: {borderColor.displayName}</li>
                            <li>Dark text: {DefaultVarnishTheme.button.default.contrastColor.displayName}</li>
                            <li>Light text: {DefaultVarnishTheme.button.default.color.displayName}</li>
                        </ul>
                    </BodySmall>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Primary-style buttons</h4>
                    <BodySmall>
                        <ul>
                            <li>Use the primary button style for the most prominent call to action on the page.</li>
                            <li>These buttons guide users to and through the main happy path in a task flow.</li>
                            <li>Background Color: {DefaultVarnishTheme.button.primary.background.displayName}</li>
                        </ul>
                    </BodySmall>
                    <ButtonExample type={'primary'} />
                </SectionWithDivider>

                <SectionWithDivider>
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
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Link-style buttons</h4>
                    <BodySmall>
                        <ul>
                            <li>If you need to offer more than one alternate action, consider using text
                                links instead of multiple secondary buttons.
                            </li>
                            <li>Bright text: {DefaultVarnishTheme.button.link.color.displayName}</li>
                        </ul>
                    </BodySmall>
                    <ButtonExample type={'link'} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Marketing-style buttons</h4>
                    <BodySmall>
                        <ul>
                            <li>Use only in marketing as an extra-large primary button for an important
                                action.
                            </li>
                            <li>Only one jumbo button can exist on a page or screen.</li>
                            <li>Bright text: {DefaultVarnishTheme.button.marketing.color.displayName}</li>
                        </ul>
                    </BodySmall>
                    <ButtonExample type={'marketing'} />
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}

interface ButtonExampleProps{
    type: ButtonType;
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
    type: ButtonType;
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

// TODO:  implement the <Columns count={x} /> component as seen in the Incubator project
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
