import React, { useEffect, useState } from "react";
import {
    FormContainer,
    HomeContainer,
} from "./styles";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import email from "../../assets/email.svg";
import password from "../../assets/lock.svg";
import login from "../../assets/login.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Email não é válido").required("Campo obrigatório"),
    password: yup.string().min(6, "No minímo 6 caracteres").required("Campo obrigatório"),
  })
  .required()

const Home = () => {
    const navigate = useNavigate();

    const [ data, setData ] = useState(null);

    useEffect( () => {
        const url = "http://localhost:5050/user";
        fetch(url).then(response => response.json()).then( dados => setData(dados))
        .catch( err => console.log(err))
    }, [])

    const {
        control,
        handleSubmit,
        formState: { errors },
        } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = dataForm => {
    let encontrado = false;

    data.map( dataAPI => {
        console.log(dataAPI);
        if(dataForm.email === dataAPI.email && dataForm.password === dataAPI.senha){
            encontrado = true;
            navigate('/feed');
        }
        if(!encontrado){
            alert('n foi encontrado.')
        }
    })
    }

    return(
        <>
            <HomeContainer>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        name="email"
                        control={control}
                        iconInput={email} 
                        type="email" 
                        placeholder="example@mail.com"
                        errorMessage={errors?.email?.message}/>
                    <Input 
                        name="password"
                        control={control}
                        iconInput={password} 
                        type="password" 
                        placeholder="Abacaxi123+"
                        errorMessage={errors?.password?.message}/>
                    <Button type="submit" title="Entrar" icon={login} />
                </FormContainer>
            </HomeContainer>
        </>
    );
};

export default Home;