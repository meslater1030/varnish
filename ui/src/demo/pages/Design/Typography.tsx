import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { DefaultVarnishTheme } from '../../../lib';
import { convertPixelsToRem } from '../../../lib/utils';
import {
    Headline1,
    Headline2,
    Headline3,
    Headline4,
    Headline5,
    BodyJumbo,
    BodyBig,
    BodyBigBold,
    BodySmall,
    BodySmallBold,
    BodyMicro,
    Notification,
    NotificationBold,
    Quote,
    Author,
    Code,
    CodeDark
} from '../../../lib/components';


// todo: get code block to display with syntax highlighting

export class Typography extends React.PureComponent<RouteComponentProps> {
    varnishTheme = DefaultVarnishTheme;
    aiForGood = 'AI for the Common Good';
    theBestWay = 'The best way to predict the future is to invent it';
    allYourBase = 'All your base are belong to us';
    codeExample = `def get_metrics(self, reset: bool = False) -> Dict[str, float]:
    return {"accuracy": self.accuracy.get_metric(reset)}`;

    render() {
        return (
            <React.Fragment>
                <Headline2>Typography</Headline2>
                <Table>
                    <HeadRow>
                        <Headline3>Headlines</Headline3>
                        <BodySmall>All headlines use font {this.varnishTheme.typography.headlineFontFamily}</BodySmall>
                    </HeadRow>

                    <Name>Headline 1</Name>
                    <Example>
                        <Headline1>{this.aiForGood}</Headline1>
                        <Size>{this.varnishTheme.typography.headline1.fontSize}/{this.varnishTheme.typography.headline1.lineHeight}</Size>
                   </Example>

                    <Name>Headline 2</Name>
                    <Example>
                        <Headline2>{this.aiForGood}</Headline2>
                        <Size>{this.varnishTheme.typography.headline2.fontSize}/{this.varnishTheme.typography.headline2.lineHeight}</Size>
                    </Example>

                    <Name>Headline 3</Name>
                    <Example>
                        <Headline3>{this.aiForGood}</Headline3>
                        <Size>{this.varnishTheme.typography.headline3.fontSize}/{this.varnishTheme.typography.headline3.lineHeight}</Size>
                    </Example>

                    <Name>Headline 4</Name>
                    <Example>
                        <Headline4>{this.aiForGood}</Headline4>
                        <Size>{this.varnishTheme.typography.headline4.fontSize}/{this.varnishTheme.typography.headline4.lineHeight}</Size>
                    </Example>

                    <Name>Headline 5</Name>
                    <Example>
                        <Headline5>{this.aiForGood}</Headline5>
                        <Size>{this.varnishTheme.typography.headline5.fontSize}/{this.varnishTheme.typography.headline5.lineHeight}</Size>
                    </Example>

                    <HeadRow>
                        <Headline3>Body</Headline3>
                        <BodySmall>Body and notification copy uses {this.varnishTheme.typography.bodyFontFamily} Regular and Bold</BodySmall>
                    </HeadRow>

                    <Name>Body Jumbo</Name>
                    <Example>
                        <BodyJumbo>{this.theBestWay}</BodyJumbo>
                        <Size>{this.varnishTheme.typography.bodyJumbo.fontSize}/{this.varnishTheme.typography.bodyJumbo.lineHeight}</Size>
                    </Example>

                    <Name>Body Big</Name>
                    <Example>
                        <div>
                            <BodyBig>{this.theBestWay}</BodyBig>
                            <br/><BodyBigBold>{this.theBestWay}</BodyBigBold>
                        </div>
                        <Size>{this.varnishTheme.typography.bodyBig.fontSize}/{this.varnishTheme.typography.bodyBig.lineHeight}</Size>
                    </Example>

                    <Name>Body Small</Name>
                    <Example>
                        <div>
                            <BodySmall>{this.theBestWay}</BodySmall>
                            <br/><BodySmallBold>{this.theBestWay}</BodySmallBold>
                        </div>
                        <Size>{this.varnishTheme.typography.bodySmall.fontSize}/{this.varnishTheme.typography.bodySmall.lineHeight}</Size>
                    </Example>

                    <Name>Body Micro</Name>
                    <Example>
                        <BodyMicro>{this.theBestWay}</BodyMicro>
                        <Size>{this.varnishTheme.typography.bodyMicro.fontSize}/{this.varnishTheme.typography.bodyMicro.lineHeight}</Size>
                    </Example>

                    <Name>Notification</Name>
                    <Example>
                        <div>
                            <Notification>{this.allYourBase}</Notification>
                            <br/><NotificationBold>{this.allYourBase}</NotificationBold>
                        </div>
                        <Size>{this.varnishTheme.typography.notification.fontSize}/{this.varnishTheme.typography.notification.lineHeight}</Size>
                    </Example>

                    <HeadRow>
                        <Headline3>Quotes</Headline3>
                        <BodySmall>Quotes and their authors use {this.varnishTheme.typography.attributionFontFamily} Regular</BodySmall>
                    </HeadRow>

                    <Name>Quote</Name>
                    <Example>
                        <Quote>“Wit is the unexpected copulation of ideas.”</Quote>
                        <Size>{this.varnishTheme.typography.quote.fontSize}/{this.varnishTheme.typography.quote.lineHeight}</Size>
                    </Example>

                    <Name>Author</Name>
                    <Example>
                        <Author>Patrick O'Brian</Author>
                        <Size>{this.varnishTheme.typography.author.fontSize}/{this.varnishTheme.typography.author.lineHeight}</Size>
                    </Example>

                    <HeadRow>
                        <Headline3>Code</Headline3>
                        <BodySmall>Code examples use {this.varnishTheme.typography.codeFontFamily} </BodySmall>
                    </HeadRow>

                    <Name>Default</Name>
                    <Example>
                        <Code>{this.codeExample}</Code>
                        <Size>{this.varnishTheme.typography.code.fontSize}/{this.varnishTheme.typography.code.lineHeight}</Size>
                    </Example>

                    <Name>Dark</Name>
                    <Example>
                        <CodeDark>{this.codeExample}</CodeDark>
                        <Size>{this.varnishTheme.typography.codeDark.fontSize}/{this.varnishTheme.typography.codeDark.lineHeight}</Size>
                    </Example>
                </Table>
            </React.Fragment>
        )
    }
}

const Table = styled.div`
    display: grid;
    grid-gap: ${props => `${convertPixelsToRem(48)}rem ${convertPixelsToRem(14)}rem`};
    grid-template-columns: repeat(2, max-content) auto;
    align-items: center;
    margin-top: ${props => `${convertPixelsToRem(64)}rem`};
`;

const HeadRow = styled.div`
    grid-column: 1 / span 3;
    padding-bottom: ${props => `${convertPixelsToRem(24)}rem`};
    border-bottom: 1px solid ${({theme}) => theme.colors.N4.value};
`;

const Name = styled.div`
    grid-column: 1;
`;

const Example = styled.div`
    grid-column: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Size = styled(BodySmall)`
    margin-left: ${props => `${convertPixelsToRem(9)}rem`};
`;
