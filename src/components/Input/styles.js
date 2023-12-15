import styled from "styled-components";

export const InputContainer = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const InputForm = styled.input`
    padding: 10px;
    background-color: #00000011;
    border: none;
    border-bottom: 1px solid #000;
    width: 210px;

    &:focus{
        outline: none;
    }
`