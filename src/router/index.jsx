import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export {Routers};
