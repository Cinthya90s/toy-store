import React, { useState } from "react";

const ListaProductos = () => {
  // Estado inicial con 1-2 productos
  const [productos, setProductos] = useState([
      {
        "id": "prod001",
        "nombre": "Estación de Tren",
        "precio_docena": 264.00,
        "descripcion": "Juego completo: Estación, puente, rieles y tren, funciona a control remoto con 4 pilas AA",
        "stock": 190,
        "imagen" : "https://placehold.co/300x300?text=Estacion+Tren"

    },

    {
        "id": "prod002",
        "nombre": "Bloques Lógicos 48 piezas",
        "precio_docena": 144.00,
        "descripcion": "Envase plástico con 48 piezas de figuras geométricas",
        "stock": 180,
        "imagen" : "https://placehold.co/300x300?text=Bloques+Logicos+48+piezas"

    }
  ]);

  // Productos adicionales predefinidos
  const productosExtra = [
    {
        "id": "prod003",
        "nombre": "Piano Escolar de Viento",
        "precio_docena": 840.00,
        "descripcion": "Melódica de viento con 32 teclas tipo piano",
        "stock": 120,
        "imagen" : "https://placehold.co/300x300?text=Piano+Escolar+de+Viento"

    },

    {
        "id": "prod004",
        "nombre": "Juego de Mesa 3 en 1",
        "precio_docena": 240.00,
        "descripcion": "Juego de mesa para niños con 3 juegos incluídos: Ajedrez, Damas y Ludo",
        "stock": 100,
        "imagen" : "https://placehold.co/300x300?text=Juego+de+Mesa+3+en+1"

    },

    {
        "id": "prod005",
        "nombre": "Rompecabezas Dinosaurios 100 piezas",
        "precio_docena": 264.00,
        "descripcion": "Encaje de piezas con figuras de dinosaurios.",
        "stock": 100,
        "imagen" : "https://placehold.co/300x300?text=Rompecabezas+Dinosaurios+100+piezas"
    }
  ];

  // Función para agregar más productos
  const agregarProductos = () => {
    setProductos([...productos, ...productosExtra]);
  };

  return (
     <section>
      <h2>Productos Disponibles</h2>

       <div className="productos-container">
        {productos.map((producto) => (
        <div key={producto.id} className="producto-card">
            <img
            src={producto.imagen}
            alt={producto.nombre}
            className="producto-img"
            />
            <p>
            <strong>Precio docena:</strong> S/ {producto.precio_docena}
            </p>
            <p className="producto-desc">{producto.descripcion}</p>
        </div>
        ))}
    </div>

      <button onClick={agregarProductos}>Agregar más productos</button>
    </section>
  );
};

export default ListaProductos;
