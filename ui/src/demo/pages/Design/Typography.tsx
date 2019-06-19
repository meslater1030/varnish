import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { DefaultVarnishTheme } from '../../../lib/theme';
import { convertPixelsToRem } from '../../../lib/utils';
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    BodyJumbo,
    Body,
    BodyBold,
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
                <H2>Typography</H2>
                <Grid>
                    <HeadRow>
                        <H3>Headlines</H3>
                        <BodySmall>All headlines use font {this.varnishTheme.typography.hFontFamily}</BodySmall>
                    </HeadRow>

                    <Name>H1</Name>
                    <Example>
                        <H1>{this.aiForGood}</H1>
                        <Size>{this.varnishTheme.typography.h1.fontSize}/{this.varnishTheme.typography.h1.lineHeight}</Size>
                   </Example>

                    <Name>H2</Name>
                    <Example>
                        <H2>{this.aiForGood}</H2>
                        <Size>{this.varnishTheme.typography.h2.fontSize}/{this.varnishTheme.typography.h2.lineHeight}</Size>
                    </Example>

                    <Name>H3</Name>
                    <Example>
                        <H3>{this.aiForGood}</H3>
                        <Size>{this.varnishTheme.typography.h3.fontSize}/{this.varnishTheme.typography.h3.lineHeight}</Size>
                    </Example>

                    <Name>H4</Name>
                    <Example>
                        <H4>{this.aiForGood}</H4>
                        <Size>{this.varnishTheme.typography.h4.fontSize}/{this.varnishTheme.typography.h4.lineHeight}</Size>
                    </Example>

                    <Name>H5</Name>
                    <Example>
                        <H5>{this.aiForGood}</H5>
                        <Size>{this.varnishTheme.typography.h5.fontSize}/{this.varnishTheme.typography.h5.lineHeight}</Size>
                    </Example>

                    <HeadRow>
                        <H3>Body</H3>
                        <BodySmall>Body and notification copy uses {this.varnishTheme.typography.bodyFontFamily} Regular and Bold</BodySmall>
                    </HeadRow>

                    <Name>Body Jumbo</Name>
                    <Example>
                        <BodyJumbo>{this.theBestWay}</BodyJumbo>
                        <Size>{this.varnishTheme.typography.bodyJumbo.fontSize}/{this.varnishTheme.typography.bodyJumbo.lineHeight}</Size>
                    </Example>

                    <Name>Body</Name>
                    <Example>
                        <div>
                            <Body>{this.theBestWay}</Body>
                            <br/><BodyBold>{this.theBestWay}</BodyBold>
                        </div>
                        <Size>{this.varnishTheme.typography.body.fontSize}/{this.varnishTheme.typography.body.lineHeight}</Size>
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
                        <H3>Quotes</H3>
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
                        <H3>Code</H3>
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
                </Grid>
            </React.Fragment>
        )
    }
}

const Grid = styled.div`
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
