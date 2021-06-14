import { Text } from '@medly-components/core';
import { DashboardIcon } from '@medly-components/icons';
import { MedlySidenavHeader, SideNav as MedlySideNav } from '@medly-components/layout';
import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const SideNav: React.SFC & WithStyle = React.memo(() => {
    const { pathname } = useLocation(),
        history = useHistory(),
        handlePathChange = useCallback((page: string) => history.push(page), [history]);
    return (
        <MedlySideNav onChange={handlePathChange} active={pathname} defaultActive="/">
            <MedlySidenavHeader />
            <MedlySideNav.List>
                <MedlySideNav.Nav path="/">
                    <DashboardIcon />
                    <Text>Dashboard</Text>
                </MedlySideNav.Nav>
            </MedlySideNav.List>
        </MedlySideNav>
    );
});
SideNav.displayName = 'AppSideNav';
SideNav.Style = MedlySideNav.Style;
