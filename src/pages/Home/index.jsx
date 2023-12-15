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
        formState: { errors, isValid },
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
      })

      console.log(isValid);
    
    
      const onSubmit = d => {
        let encontrado = false;

        data.map( objeto => {
            console.log(objeto);
            if(d.email === objeto.email && d.password == objeto.senha){
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
                        placeholder="example@mail.com"/>
                    <Input 
                        name="password"
                        control={control}
                        iconInput={password} 
                        type="password" 
                        placeholder="Abacaxi123+"/>
                    <Button type="submit" title="Entrar" icon={login} />
                </FormContainer>
            </HomeContainer>
        </>
    );
};

export default Home;