import React from "react";
import "./NavBar.css"; 

const NavBar = () =>{
    return (
        <ul>
            <li><a className="active" href="#home">Inicio</a></li>
            <li><a href="#news">Productos</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">Nosotros</a></li>
        </ul>
        
    )
}
export default NavBar