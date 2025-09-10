import React, { useState} from 'react';
import trencito from '../video/trencito.mp4';
import audio1 from '../audio/audiojuguete.mp3';



const ContentColumm= () => {
    const [isSidebarActive, setIsSidebarActive]= useState(false);
    
    const handleToggleMenu = () =>{
        setIsSidebarActive(!isSidebarActive);

    };

    return(
        <>
            <section className="contenido-principal">
            <div className="media">
                <h2>Video de presentación</h2>
                <video width="400" controls>
                    <source src={trencito} type="video/mp4"/>
                </video>

                <h2>Audio promocional</h2>
                <audio controls>
                    <source src={audio1} type="audio/mpeg"/>
                </audio>
            </div>

            <nav className="menu-vertical">
                <h3>Favoritos</h3>
                    <ul>
                        <li><a href="#navidad">Navidad</a></li>
                        <li><a href="#playa">Playa</a></li>
                        <li><a href="#escolar">Escolar</a></li>
                        <li><a href="#didacticos">Juegos Didácticos</a></li>
                    </ul>
            </nav>
        </section>
        
        </>
    );
};

export default ContentColumm