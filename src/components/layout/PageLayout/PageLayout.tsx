import React, { HTMLProps } from 'react';
import { PageLayoutStyled } from './PageLayout.styled';

const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(({ children }) => {
    return <PageLayoutStyled>{children}</PageLayoutStyled>;
});

PageLayout.displayName = 'PageLayout';

export default PageLayout;
