import styled from 'styled-components';

export const PageLayoutStyled = styled('div')`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-areas:
        'aside header'
        'aside  main';
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr;

    & > aside {
        grid-area: aside;
    }

    & > header {
        grid-area: header;
    }

    & > main {
        grid-area: main;
        transition: width 200ms;
    }
`;
