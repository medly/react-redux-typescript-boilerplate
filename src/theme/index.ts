import { defaultTheme as medlyDefaultTheme, Theme as MedlyTheme } from '@medly-components/theme';
import { coreDefaultTheme } from './core';
export * from '@medly-components/theme';
export const defaultTheme = {
    ...medlyDefaultTheme,
    ...coreDefaultTheme,
};

export type Theme = MedlyTheme;
