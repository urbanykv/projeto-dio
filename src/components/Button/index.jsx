import React from "react";
import { ButtonContainer } from './styles'

const Button = ({ title, icon, type ,onClick }) => {
    return(
        <ButtonContainer type={type} onClick={onClick}>
            {title}
            <img src={icon} alt="icone"/>
        </ButtonContainer>
    );
};

export default Button;