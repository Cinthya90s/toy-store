import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    celular: '',
    categoria: '',
    presupuesto: ''
  });

  const [messages, setMessages] = useState([]); // ahora array
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let errors = [];

    // Validación del nombre
    if (formData.nombre.trim() === '') {
      isValid = false;
      errors.push('Debe ingresar nombre.');
    }

    // Validación de apellidos
    if (formData.apellidos.trim() === '') {
      isValid = false;
      errors.push('Debe ingresar apellido.');
    }

    // Validación de correo
    const regexEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    if (!regexEmail.test(formData.correo.trim())) {
      isValid = false;
      errors.push('Por favor, ingresa un correo electrónico válido.');
    }

    // Validación de celular
    const phoneNumber = formData.celular.replace(/\D/g, '');
    if (phoneNumber.length < 9) {
      isValid = false;
      errors.push('El número celular debe tener al menos 9 dígitos.');
    }

    // Validación de presupuesto
    const presupuesto = parseFloat(formData.presupuesto);
    if (isNaN(presupuesto) || presupuesto < 100) {
      isValid = false;
      errors.push('El presupuesto debe ser mínimo 100 soles.');
    }

    // Configuración de mensajes
    if (!isValid) {
      setIsError(true);
      setMessages(errors);
    } else {
      setIsError(false);
      setMessages(['Formulario enviado con éxito ']);
      setFormData({
        nombre: '',
        apellidos: '',
        correo: '',
        celular: '',
        categoria: '',
        presupuesto: ''
      });
    }
  };

  return (
    <>
      <section>
        <h2>Te contactamos</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label><br/>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} /><br/><br/>

          <label htmlFor="apellidos">Apellidos:</label><br/>
          <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} /><br/><br/>

          <label htmlFor="correo">Correo electrónico:</label><br/>
          <input type="email" id="correo" name="correo" placeholder="Ej: correo@gmail.com" value={formData.correo} onChange={handleChange} /><br/><br/>

          <label htmlFor="celular">Número de celular:</label><br/>
          <input type="text" id="celular" name="celular" placeholder="Ej: 962955944" value={formData.celular} onChange={handleChange} /><br/><br/>

          <label htmlFor="categoria">Categoría de juguetes:</label><br/>
          <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
            <option value="">-- Selecciona una opción --</option>
            <option value="educativos">Educativos</option>
            <option value="peluches">Peluches</option>
            <option value="video_juego">Video juego</option>
            <option value="otros">Otros</option>
          </select><br/><br/>

          <label htmlFor="presupuesto">Presupuesto estimado (en s/.):</label><br/>
          <input type="number" id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange} /><br/><br/>

          <button type="submit">Enviar</button>
        </form>

        {/* Mostrar mensajes */}
        {messages.length > 0 && (
          <div style={{ color: isError ? 'red' : 'green' }}>
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default ContactForm;
