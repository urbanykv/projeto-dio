import React from "react";
import { Button } from "../Button";
import { 
    HeaderContainer,
    Row,
    Menu,
    MenuRight,
    Wrapper,
    BuscarInputContainer
 } from "./styles";


const Header = () => {
    return(
        <Wrapper>
            <HeaderContainer>
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