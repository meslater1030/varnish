import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { DefaultVarnishTheme } from '../../../lib/theme';
import {
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
import { PageTitle } from '../Shared';

export class Typography extends React.PureComponent<RouteComponentProps> {
    aiForGood = 'AI for the Common Good';
    theBestWay = 'The best way to predict the future is to invent it';
    allYourBase = 'All your base are belong to us';
    codeExample = `def get_metrics(self, reset: bool = False) -> Dict[str, float]:
    return {"accuracy": self.accuracy.get_metric(reset)}`;

    render() {
        return (
            <React.Fragment>
                <PageTitle>Typography</PageTitle>
                <Grid>
                    <HeadRow>
                        <h3>Headlines</h3>
                        <BodySmall>All headlines use font {DefaultVarnishTheme.typography.headlineFontFamily}</BodySmall>
                    </HeadRow>

                    <Name>h1</Name>
                    <Example>
                        <h1>{this.aiForGood}</h1>
                        <Size>{DefaultVarnishTheme.typography.h1.fontSize}/{DefaultVarnishTheme.typography.h1.lineHeight}</Size>
                   </Example>

                    <Name>h2</Name>
                    <Example>
                        <h2>{this.aiForGood}</h2>
                        <Size>{DefaultVarnishTheme.typography.h2.fontSize}/{DefaultVarnishTheme.typography.h2.lineHeight}</Size>
                    </Example>

                    <Name>h3</Name>
                    <Example>
                        <h3>{this.aiForGood}</h3>
                        <Size>{DefaultVarnishTheme.typography.h3.fontSize}/{DefaultVarnishTheme.typography.h3.lineHeight}</Size>
                    </Example>

                    <Name>h4</Name>
                    <Example>
                        <h4>{this.aiForGood}</h4>
                        <Size>{DefaultVarnishTheme.typography.h4.fontSize}/{DefaultVarnishTheme.typography.h4.lineHeight}</Size>
                    </Example>

                    <Name>h5</Name>
                    <Example>
                        <h5>{this.aiForGood}</h5>
                        <Size>{DefaultVarnishTheme.typography.h5.fontSize}/{DefaultVarnishTheme.typography.h5.lineHeight}</Size>
                    </Example>

                    <HeadRow>
                        <h3>Body</h3>
                        <BodySmall>Body and notification copy uses {DefaultVarnishTheme.typography.bodyFontFamily} Regular and Bold</BodySmall>
                    </HeadRow>

                    <Name>Body Jumbo</Name>
                    <Example>
                        <BodyJumbo>{this.theBestWay}</BodyJumbo>
                        <Size>{DefaultVarnishTheme.typography.bodyJumbo.fontSize}/{DefaultVarnishTheme.typography.bodyJumbo.lineHeight}</Size>
                    </Example>

                    <Name>Body</Name>
                    <Example>
                        <div>
                            <Body>{this.theBestWay}</Body>
                            <br/><BodyBold>{this.theBestWay}</BodyBold>
                        </div>
                        <Size>{DefaultVarnishTheme.typography.body.fontSize}/{DefaultVarnishTheme.typography.body.lineHeight}</Size>
                    </Example>

                    <Name>Body Small</Name>
                    <Example>
                        <div>
                            <BodySmall>{this.theBestWay}</BodySmall>
                            <br/><BodySmallBold>{this.theBestWay}</BodySmallBold>
                        </div>
                        <Size>{DefaultVarnishTheme.typography.bodySmall.fontSize}/{DefaultVarnishTheme.typography.bodySmall.lineHeight}</Size>
                    </Example>

                    <Name>Body Micro</Name>
                    <Example>
                        <BodyMicro>{this.theBestWay}</BodyMicro>
                        <Size>{DefaultVarnishTheme.typography.bodyMicro.fontSize}/{DefaultVarnishTheme.typography.bodyMicro.lineHeight}</Size>
                    </Example>

                    <Name>Notification</Name>
                    <Example>
                        <div>
                            <Notification>{this.allYourBase}</Notification>
                            <br/><NotificationBold>{this.allYourBase}</NotificationBold>
                        </div>
                        <Size>{DefaultVarnishTheme.typography.notification.fontSize}/{DefaultVarnishTheme.typography.notification.lineHeight}</Size>
                    </Example>

                    <HeadRow>
                        <h3>Quotes</h3>
                        <BodySmall>Quotes and their authors use {DefaultVarnishTheme.typography.attributionFontFamily} Regular</BodySmall>
                    </HeadRow>

                    <Name>Quote</Name>
                    <Example>
                        <Quote>“Wit is the unexpected copulation of ideas.”</Quote>
                        <Size>{DefaultVarnishTheme.typography.quote.fontSize}/{DefaultVarnishTheme.typography.quote.lineHeight}</Size>
                    </Example>

                    <Name>Author</Name>
                    <Example>
                        <Author>Patrick O'Brian</Author>
                        <Size>{DefaultVarnishTheme.typography.author.fontSize}/{DefaultVarnishTheme.typography.author.lineHeight}</Size>
                    </Example>

                    <HeadRow>
                        <h3>Code</h3>
                        <BodySmall>Code examples use {DefaultVarnishTheme.typography.codeFontFamily} </BodySmall>
                    </HeadRow>

                    <Name>Default</Name>
                    <Example>
                        <Code>{this.codeExample}</Code>
                        <Size>{DefaultVarnishTheme.typography.code.fontSize}/{DefaultVarnishTheme.typography.code.lineHeight}</Size>
                    </Example>

                    <Name>Dark</Name>
                    <Example>
                        <CodeDark>{this.codeExample}</CodeDark>
                        <Size>{DefaultVarnishTheme.typography.codeDark.fontSize}/{DefaultVarnishTheme.typography.codeDark.lineHeight}</Size>
                    </Example>
                </Grid>
            </React.Fragment>
        )
    }
}

const Grid = styled.div`
    display: grid;
    grid-gap: ${({theme}) => `${theme.spacing.xl} ${theme.spacing.md}`};
    grid-template-columns: repeat(2, max-content) auto;
    align-items: center;

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;

const HeadRow = styled.div`
    grid-column: 1 / span 3;
    padding-bottom: ${({theme}) => theme.spacing.lg};
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
    margin-left: ${({theme}) => theme.spacing.xs};
`;
