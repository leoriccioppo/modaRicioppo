import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { Header } from "../components/header/Header.jsx";

const Routers = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export {Routers};
