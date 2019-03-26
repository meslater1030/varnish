import * as React from 'react';

import { Header, AI2Logo, AppTitle, Main, BodyText } from '../lib/components';

const FullPage = () => (
    <React.Fragment>
        <Header>
            <AI2Logo />
            <AppTitle>Full Page Example</AppTitle>
        </Header>
        <Main>
            <BodyText>Welcome to your demo!</BodyText>
        </Main>
    </React.Fragment>
);

export default FullPage;
