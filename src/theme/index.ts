import { defaultTheme as medlyDefaultTheme, Theme as MedlyTheme } from '@medly-components/theme';
import { coreDefaultTheme } from './core';
import { layoutDefaultTheme } from './layout';

export * from '@medly-components/theme';

export const defaultTheme = {
    ...medlyDefaultTheme,
    ...coreDefaultTheme,
    ...layoutDefaultTheme,
};

export type Theme = MedlyTheme;
