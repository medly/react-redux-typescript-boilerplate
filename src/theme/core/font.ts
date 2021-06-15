import { defaultTheme, FontTheme } from '@medly-components/theme';

const font: FontTheme = {
    ...defaultTheme.font,
    defaults: {
        ...defaultTheme.font.defaults,
        color: defaultTheme.colors.black
    }
};

export default font;
