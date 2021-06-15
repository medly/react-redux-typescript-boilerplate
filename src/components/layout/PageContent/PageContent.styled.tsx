import styled from 'styled-components';

export const PageContent = styled('main')`
    background-color: #eff2f4;
    overflow: auto;
    padding-top: 32px;

    @media (max-width: 1279px) {
        padding-left: 24px;
        padding-right: 24px;
    }

    @media (min-width: 1280px) {
        padding-left: calc(24px + (((100vw - 1280px) / 160) * 16));
        padding-right: calc(24px + (((100vw - 1280px) / 160) * 16));
    }

    @media (min-width: 1440px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`;

export const Loader = styled('div')`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
`;
