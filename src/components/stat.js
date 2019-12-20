import styled from 'styled-components';

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Stat = styled.div`
    flex-grow: 0;
    margin-right: 10px;

    :last-child {
        margin-right: 0;        
    }

    img {
        height: 24px;
        margin-right: 2px;
    }

    span {
        font-family: 'pirata-one';
        font-size: 32px;
    }

    @media only screen and (max-device-width: 812px) {
        margin-right: 5px;
    }
`;