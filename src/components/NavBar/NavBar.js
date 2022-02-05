import { CartWidget } from "../Widget/CartWidget/CartWidget";
import { GiftWidget } from "../Widget/GiftWidget/GiftWidget";
import { UserWidget } from "../Widget/UserWidget/UserWidget";

import './NavBar.css';


export const NavBar = () => {

    return (
        
        <div className="navBar">
            <nav className="navLinks">
            <h1>tripbox</h1>
                <ul>
                    <li>Gastronomía</li> 
                    <li>Bienestar</li>
                    <li>Escapadas</li>   
                    <li>Aventura</li>  
                    <li><GiftWidget /></li>
                    <li><UserWidget /></li>
                    <li><CartWidget /></li>
                </ul>
            </nav> 
            <div className="navline"></div>
        </div>

    )
}