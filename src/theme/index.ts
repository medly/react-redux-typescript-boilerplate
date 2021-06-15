import { defaultTheme as medlyDefaultTheme, Theme as MedlyTheme } from '@medly-components/theme';
import { coreDefaultTheme } from './core';

export const defaultTheme = {
    ...medlyDefaultTheme,
    ...coreDefaultTheme
};

export type Theme = MedlyTheme;
