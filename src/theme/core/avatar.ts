import { AvatarTheme, defaultTheme } from '@medly-components/theme';
const avatar: AvatarTheme = {
    ...defaultTheme.avatar,
    defaults: {
        size: 'S',
        textColor: defaultTheme.colors.orange[300],
        bgColor: defaultTheme.colors.white
    }
};

export default avatar;
