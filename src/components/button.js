import styled from 'styled-components';

const ButtonBase = styled.button`
    background-color: rgba(255,255,255, 0.6);
    font-family: 'custom-font';
    border: 2px solid black;
    color: black;
    text-decoration: none;

    :disabled {
        opacity: 0.5;
    }

    :hover {
        border-color: gray;
        cursor: pointer;
    }
`;

export const TokenButton = styled(ButtonBase)`
    padding: 1px 3px;
    font-size: 1rem;
    line-height: 14px;
    img {
        height: 20px;
    }
`;

export const TextButton = styled(ButtonBase)`
    padding: 0.5rem;
    font-size: 2em;
`;