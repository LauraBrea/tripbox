import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {

    return (
        
        <header>
            <h1>TIENDA FLORECER</h1>

            <nav>
                <p>Inicio</p>
                <p>Nosotros</p>
                <p>FAQS</p>
                <CartWidget />
            </nav>
        </header>
    )
}