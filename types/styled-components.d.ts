import { Theme } from '@medly-components/theme';
import 'styled-components';

declare module 'styled-components' {
    export type DefaultTheme = Theme;
}
