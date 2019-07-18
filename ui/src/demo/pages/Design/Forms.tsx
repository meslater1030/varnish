import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { PageTitle, SectionWithDivider } from '../Shared';
import {
    Select,
    SelectOptGroup,
    SelectOption,
    ExternalLink,
    Input,
    TextArea,
    DatePicker
} from '../../../lib/components';

export class Forms extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Forms</PageTitle>

                <h3> Appearance and Behavior </h3>
                Styled form controls such as Select, Input, TextArea, and DatePicker.

                <SectionWithDivider>
                    <h4>Select and SelectOption</h4>
                    <MaxWidth>
                        <Select>
                            <SelectOption key="1" value="1">test 1a</SelectOption>
                            <SelectOption key="2" value="2">test 2a</SelectOption>
                            <SelectOption key="3" value="3">test 3a</SelectOption>
                            <SelectOption key="4" value="4">test 4a</SelectOption>
                        </Select>
                    </MaxWidth>
                    For more options see the: <ExternalLink target="_blank" href="https://ant.design/components/select/">Antd component</ExternalLink>
                </ SectionWithDivider>

                <SectionWithDivider>
                    <h4>Select with SelectOptGroup</h4>
                    <MaxWidth>
                        <Select>
                            <SelectOptGroup label="group 1">
                                <SelectOption key="1" value="1">test 1a</SelectOption>
                                <SelectOption key="2" value="2">test 2a</SelectOption>
                                <SelectOption key="3" value="3">test 3a</SelectOption>
                                <SelectOption key="4" value="4">test 4a</SelectOption>
                            </SelectOptGroup>
                            <SelectOptGroup label="group 2">
                                <SelectOption key="5" value="5">test 1b</SelectOption>
                                <SelectOption key="6" value="6">test 2b</SelectOption>
                                <SelectOption key="7" value="7">test 3b</SelectOption>
                                <SelectOption key="8" value="8">test 4b</SelectOption>
                            </SelectOptGroup>
                        </Select>
                    </MaxWidth>
                    For more options see the: <ExternalLink target="_blank" href="https://ant.design/components/select/">Antd component</ExternalLink>
                </ SectionWithDivider>

                <SectionWithDivider>
                    <h4>Input</h4>
                    <MaxWidth>
                        <Input />
                    </MaxWidth>
                    For more options see the: <ExternalLink target="_blank" href="https://ant.design/components/input/">Antd component</ExternalLink>
                </ SectionWithDivider>

                <SectionWithDivider>
                    <h4>TextArea</h4>
                    <MaxWidth>
                        <TextArea />
                    </MaxWidth>
                    For more options see the: <ExternalLink target="_blank" href="https://ant.design/components/input/#Input.TextArea">Antd component</ExternalLink>
                </ SectionWithDivider>

                <SectionWithDivider>
                    <h4>DatePicker</h4>
                    <MaxWidth>
                        <DatePicker />
                    </MaxWidth>
                    For more options see the: <ExternalLink target="_blank" href="https://ant.design/components/date-picker/">Antd component</ExternalLink>
                </ SectionWithDivider>
            </React.Fragment>
        )
    }
}

const MaxWidth = styled.div`
  max-width: ${({theme}) => theme.breakpoints.xs};
`;
