import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>

            <Link to="/login">Ir para o Login</Link>
        </div>
    );
};

export default Home;