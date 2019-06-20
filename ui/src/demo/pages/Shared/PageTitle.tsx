import * as React from 'react';
import styled from 'styled-components';

import { H2 } from '../../../lib/components';
import { DefaultVarnishTheme } from '../../../lib/theme';

export const PageTitle = styled(H2)`
    margin-bottom: ${props => DefaultVarnishTheme.spacing.xxl};
`;
