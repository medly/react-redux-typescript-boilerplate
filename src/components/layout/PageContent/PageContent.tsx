import { WithStyle } from '@medly-components/utils';
import { CircleLoader } from '@medly-components/loaders';
import React from 'react';
import * as Styled from './PageContent.styled';
import { Props } from './types';

export const PageContent: React.SFC<Props> & WithStyle = props => {
    return (
        <Styled.PageContent {...props}>
            {props.isLoading && (
                <Styled.Loader>
                    <CircleLoader />
                </Styled.Loader>
            )}
            {props.children}
        </Styled.PageContent>
    );
};

PageContent.displayName = 'PageContent';
PageContent.Style = Styled.PageContent;
