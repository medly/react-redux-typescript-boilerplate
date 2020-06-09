import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './PageContent.styled';

export const PageContent: React.SFC & WithStyle = props => {
    return <Styled.PageContent {...props}>{props.children}</Styled.PageContent>;
};
PageContent.displayName = 'PageContent';
PageContent.Style = Styled.PageContent;
