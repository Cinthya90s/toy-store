import React, { useState} from 'react';
import logo from '../img/logokids.png';
import wapp from '../img/whatsapp.png';


const Header = () => {
    const [isSidebarActive, setIsSidebarActive]= useState(false);
    
    const handleToggleMenu = () =>{
        setIsSidebarActive(!isSidebarActive);

    };

    return(
        <>
        <header>
          <div className="logo-titulo">
                <img src={logo} alt="Logo" className="logo" />
            <h1>BIENVENIDOS A KIDS Toy Store</h1>

          </div>
        <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
	        <li><a href="#outlet">Outlet</a></li>
	        <li><a href="#catalogo">Catálogo</a></li>
	        <li><a href="#nosotros">Nosotros</a></li>	
	        <li><a href="#blog">Blog</a></li>	
        </ul>	 
        </nav>
    </header>
    
    <a href="https://wa.me/51904328425" className="whatsapp-button" target="_blank" aria-label="Chatea con nosotros">
        <img src={wapp} alt="WhatsApp" width="60" height="60"/>
    </a>
        
        </>
    );
};

export default Header;
