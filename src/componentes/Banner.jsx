import React, { useState} from 'react';
import banner from '../img/banner.png';
import banner1 from '../img/banner1.png';



const Banner = () => {
    const [isSidebarActive, setIsSidebarActive]= useState(false);
    
    const handleToggleMenu = () =>{
        setIsSidebarActive(!isSidebarActive);

    };

    return(
        <>
            <section>
                <h2 style={{ textAlign: "center" }}> Distribuimos juguetes al por mayor a nivel nacional</h2>
                <div>
                    <img src={banner} alt="Imagen de perfil"  height="300px" width="100%"/>
                </div>
                <div>
                    <img src={banner1} alt="Imagen de perfil"  height="300px" width="100%"/>
                </div>
            </section>
        
        </>
    );
};

export default Banner;
