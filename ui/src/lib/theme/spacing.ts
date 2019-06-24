import { convertPixelsToRem } from '../utils/base';

export class Spacing {
    public rem: string;
    constructor(public displayName: string, public px: number) {
        this.rem = convertPixelsToRem(px);
    }
    toString() {
        return this.rem;
    }
}

export const spacing = {
    xs: new Spacing('xs', 8),
    sm: new Spacing('sm', 12),
    md: new Spacing('md', 16),
    lg: new Spacing('lg', 24),
    xl: new Spacing('xl', 36),
    xxl: new Spacing('xxl', 64)
}
