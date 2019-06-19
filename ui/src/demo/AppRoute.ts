import { ComponentType } from 'react';

export interface AppRoute {
    path: string;
    label: string;
    component: ComponentType<any>;
}
