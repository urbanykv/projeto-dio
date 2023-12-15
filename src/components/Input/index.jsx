import React from "react";
import { 
    InputContainer,
    InputForm
} from "./styles";
import { Controller } from "react-hook-form";


const Input = ({iconInput, control, type, placeholder, name, ...rest}) => {
    return(
        <InputContainer>
            <img src={iconInput} alt="Icon Input"/>
            <Controller
                name={name}
                control={control}
                render={({ field }) => 
                <InputForm
                    {...field} {...rest} 
                    type={type}
                    placeholder={placeholder}
                />}
            />
        </InputContainer>
    );
};

export { Input };