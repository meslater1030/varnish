import * as React from 'react';
import styled from 'styled-components';

import { H2 } from '../../../lib/components';
import { convertPixelsToRem } from '../../../lib/utils';

export const PageTitle = styled(H2)`
    margin-bottom: ${props => `${convertPixelsToRem(65)}rem`};
`;
