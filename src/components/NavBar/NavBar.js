import { CartWidget } from "../Widget/CartWidget/CartWidget";
import { GiftWidget } from "../Widget/GiftWidget/GiftWidget";
import { UserWidget } from "../Widget/UserWidget/UserWidget";
import { InfoWidget } from "../Widget/InfoWidget/InfoWidget";
import {Link} from 'react-router-dom';
import './NavBar.css';


export const NavBar = () => {

    return (
        <div className="navBar">
            <nav className="navLinks">
                <Link to='/' className="navLogo"><h1>tripbox</h1></Link>
                <div className="navCategory">
                    <Link to='/categoria/gastronomia'>Gastronomía</Link>
                    <Link to='/categoria/bienestar'>Bienestar</Link>
                    <Link to='/categoria/escapadas'>Escapadas</Link>
                    <Link to='/categoria/aventura'>Aventura</Link>
                </div>
                <div className="navIcons">
                    <Link to='/pages/informacion'><InfoWidget /></Link>
                    <Link to='/pages/regalos'><GiftWidget /></Link>
                    <Link to='/'><UserWidget /></Link>
                    <Link to='/'><CartWidget /></Link>
                </div>
            </nav> 
            <div className="navline"></div>
        </div>
    )
}