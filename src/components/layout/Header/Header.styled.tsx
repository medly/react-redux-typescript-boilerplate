import styled from 'styled-components';

export const Header = styled('header')`
    min-height: 72px;
    background-color: white;
    padding: 0 2%;
    box-shadow: 0 2px 8 rgba(176, 188, 200, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LeftSide = styled('div')`
    display: flex;
    align-items: center;
    & > * {
        margin-right: ${({ theme }) => theme.spacing.S2};
    }
`;

export const RightSide = styled('div')`
    display: flex;
    align-items: center;
    & > * {
        margin-left: ${({ theme }) => theme.spacing.S2};
    }
`;
