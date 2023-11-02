import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { Header } from "../components/header";
import { Eletronics } from "../pages/Products/Eletronics.jsx";
import { Jewelery } from "../pages/Products/Jewelery.jsx";
import { WomensClothing } from "../pages/Products/Women.jsx";
import { MensClothing } from "../pages/Products/Men.jsx";
import { Cart } from "../pages/Cart/Cart.jsx";

const Routers = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Eletronics" element={<Eletronics />} />
                <Route path="/Jewelery" element={<Jewelery />} />
                <Route path="/MensClothing" element={<MensClothing />} />
                <Route path="/WomensClothing" element={<WomensClothing />} />
                <Route path ="/Cart" element ={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

export {Routers};
