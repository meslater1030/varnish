import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { PageTitle, SectionWithDivider } from '../Shared';
import { spacing, Spacing as ThemeSpacing } from '../../../lib/theme/spacing';

export class Spacing extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Spacing</PageTitle>

                <h3> Appearance and Behavor </h3>
                Standard spacing units.

                <SectionWithDivider>
                    <h4>Spacing</h4>
                    <SpacingGrid>
                        {Object.keys(spacing).map((key: string) => {
                            const spac = spacing[key];
                            return <SpacingRow spacing={spac} key={spac.displayName} />
                        })}
                    </SpacingGrid>
                </ SectionWithDivider>

            </React.Fragment>
        )
    }
}

interface SpacingRowProps {
    spacing: ThemeSpacing;
}
class SpacingRow extends React.PureComponent<SpacingRowProps> {
    render() {
        return (
            <React.Fragment>
                <Key>{this.props.spacing.displayName}</Key>
                <Px>{this.props.spacing.px}</Px>
                <Rem>{this.props.spacing.rem}</Rem>
                <Example width={this.props.spacing.rem}>
                    <ExampleInner/>
                    <ExampleInner/>
                    <ExampleInner/>
                    <ExampleInner/>
                    <ExampleInner/>
                    <ExampleInner/>
                </Example>
            </React.Fragment>
        )
    }
}

const SpacingGrid = styled.div`
    display: grid;
    align-items: center;
    grid-gap: ${({theme}) => theme.spacing.lg};
`;

const Key = styled.div`
    grid-column: 1;
`;

const Px = styled.div`
    grid-column: 2;
`;

const Rem = styled.div`
    grid-column: 3;
`;

const Example = styled.div<{width: string}>`
    display: grid;
    grid-gap: ${(props) => props.width};
    grid-template-columns: repeat(6, min-content);
    grid-column: 4;
    overflow: hidden;
    max-width: 14em;
`;

const ExampleInner = styled.div`
    display: inline-block;
    width: ${({theme}) => theme.spacing.xl};
    height: ${({theme}) => theme.spacing.lg};
    background: ${({theme}) => theme.palette.primary.main};
`;
