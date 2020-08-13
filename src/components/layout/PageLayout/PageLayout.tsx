import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageLayoutStyled } from './PageLayout.styled';

class PageLayout extends React.PureComponent<RouteComponentProps> {
    public componentDidCatch() {
        this.props.history.push(this.props.location.pathname);
    }

    public render() {
        return <PageLayoutStyled>{this.props.children}</PageLayoutStyled>;
    }
}

export default withRouter(PageLayout);
