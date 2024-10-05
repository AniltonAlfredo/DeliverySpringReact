import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import Navbar from "./Navbar";

function Rotas() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;