import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Feed from "../pages/Feed";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </BrowserRouter>
    );
};

export { Rotas };