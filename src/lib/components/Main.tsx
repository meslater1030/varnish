import * as React from 'react';
import styled from 'styled-components';

import { MaxWidthCenteredContent } from './MaxWidthCenteredContent';

interface Props {
    children: React.ReactNode | React.ReactNodeArray;
}

/**
 * A component that's to be used for the main content of your page.
 *
 * This component is primarily responsible for offsetting your primary content
 * so that it doesn't dispaly underneath the `<Header />` present in the
 * your layout.
 *
 * TODO: If users are using this without a `<Header />` or with a statically
 * positioned header, they won't want the offset. We should parameterize this
 * if / when that's the case.
 */
export const Main = (props: Props) => (
    <ToolbarOffset>
        <MaxWidthCenteredContent>
            {props.children}
        </MaxWidthCenteredContent>
    </ToolbarOffset>
);

const ToolbarOffset = styled.main`
    padding-top: 143px;
`;
