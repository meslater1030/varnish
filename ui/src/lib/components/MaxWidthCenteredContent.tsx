import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode | React.ReactNodeArray;
};

export const MaxWidthCenteredContent = (props: Props) => (
    <MaxWidthCenteredContainer>
        {props.children}
    </MaxWidthCenteredContainer>
);

const MaxWidthCenteredContainer = styled.div`
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    max-width: 1200px;
`;
