import React, { useState} from 'react';
import logofb from '../img/facebook.png';
import logoinsta from '../img/instagram.png';
import logoX from '../img/X.png';


const Footer = () => {
    const [isSidebarActive, setIsSidebarActive]= useState(false);
    
    const handleToggleMenu = () =>{
        setIsSidebarActive(!isSidebarActive);

    };

    return(
        <>
         <footer className="footer">
            <div className="footer-info">
                <p>&copy; 2025 Toy Store. Todos los derechos reservados.</p>
                <p>
                    <a href="#">Libro de Reclamaciones</a> |
                    <a href="#">Términos y Condiciones</a>
                </p>
            </div>

            <div className="footer-redes">
                <p>Síguenos en nuestras redes sociales</p>
                <a href="#"><img src={logofb} alt="Facebook" width="24"/></a>
                <a href="#"><img src={logoinsta} alt="Instagram" width="24"/></a>
                <a href="#"><img src={logoX} alt="X" width="24"/></a>
            </div>
        </footer>
        
        </>
    );
};

export default Footer;
