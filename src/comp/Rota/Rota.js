import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Sobre from "../../pages/Sobre/Sobre"
import React from "react";
import Denuncie from "../../pages/Denuncie/Denuncie";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="sobre" element={<Sobre/>} />
                <Route path="denuncie" element={<Denuncie/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;