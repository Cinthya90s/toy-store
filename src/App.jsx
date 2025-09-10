import React from 'react';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import ContactForm from './componentes/ContactForm';
import Contentcolumn from './componentes/ContentColumn';
import ListaProductos from './componentes/ListaProductos';


const App = () => {
        return (
            <>
            <Header/>
            <main>
                 <div className='columnas'>
                    <Banner/>
                    <ContactForm/>
                 </div>
                    <ListaProductos/>
                    <Contentcolumn/>
            </main>
            <Footer/>
            </>
        );
};


export default App; 
