import styled from 'styled-components';

export const ViewContainer = styled.div`
    height: 100vh;
    width: 100vw;
    padding-left: 8vw;
    padding-right: 8vw;
    padding-top: 10vh;
    box-sizing: border-box;

    @media only screen and (max-device-width: 812px) {
        padding-left: 8vw;
        padding-right: 8vw;
        padding-top: 5vh;
    }
`;
