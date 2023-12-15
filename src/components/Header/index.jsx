import React from "react";
import logo from "../../assets/logo-dio.png";
import Button from "../Button";
import { 
    HeaderContainer,
    Row,
    Menu,
    MenuRight,
    Wrapper,
    BuscarInputContainer,
    Input
 } from "./styles";


const Header = () => {
    return(
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <img src={logo} alt="Logo DIO"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </Row>
            </HeaderContainer>
        </Wrapper>
    );
};

export default Header;