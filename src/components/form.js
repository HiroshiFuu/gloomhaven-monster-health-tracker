import React from 'react';
import styled from 'styled-components';

export const FormGroup = styled.div`
    margin-bottom: 10px;
`;

export const FormGroupTitle = styled.span`
    font-family: 'custom-font';
    font-style: italic;
    display: block;
    font-size: 2rem;
`;

const inputBase = (props) => `
    background-color: rgba(255,255,255, 0.6);
    font-family: 'pirata-one';
    border: 2px solid black;
    color: black;
    width: 100%;
    font-size: 2rem;
    padding-top: 6px;

    @media only screen and (max-device-width: 812px) {
      padding-top: 0;
    }
`;

export const Input = styled.input`
    ${inputBase}

    @media only screen and (max-device-width: 812px) {
      width: 270px;
    }
`;

export const DropDown = styled.select`
    ${inputBase}

    @media only screen and (max-device-width: 812px) {
      width: 140px;
    }
`;


const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'custom-font';
    font-size: 2em;

    span {
      padding-top: 8px;

      @media only screen and (max-device-width: 812px) {
        padding-top: 0;
      }
    }
`;

const CheckboxStyle = styled.input`
    appearance: none;
    ${inputBase}
    width: 35px;
    height: 35px;
    margin: 0 0px 0 0;

    :checked {
       :after {
          outline: none;
          content: "x";
          position: relative;
          font-size: 2rem;
          top: -10px;
          left: 5px;

          @media only screen and (max-device-width: 812px) {
            top: -8px;
            left: 8px;
          }
       }
    }
`;

export const Checkbox = ({title, checked, onChange}) => {
    return (
        <CheckboxContainer>
            <CheckboxStyle type="checkbox" checked={checked} onChange={onChange}/> <span>{title}</span>
        </CheckboxContainer>
    );
}