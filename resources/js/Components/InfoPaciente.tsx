import React from 'react';

interface InfoPacienteProps {
  nombre: string;
  edad: number;
  // Agrega más propiedades según lo que necesites
}

const InfoPaciente: React.FC<InfoPacienteProps> = ({ nombre, edad }) => {
  return (
    <div style={{ position: 'absolute', top: '0', left: '0', zIndex: '2', width: '100%', height: '120px', borderBottom: '2px solid #000', padding: '10px' }}>
      <h2>Nombre: {nombre}</h2>
      <h3>Edad: {edad}</h3>
      {/* Agrega más información según sea necesario */}
    </div>
  );
};

export default InfoPaciente;
