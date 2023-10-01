import React, { useState, useEffect } from 'react';
import Lightbox from './LightBoxSesion';
import { isPast } from 'date-fns';

interface InfoSesionesProps {
  fecha: string;
  titulo: string;
  descripcion: string;
  verificacion: boolean;
}

const InfoSesiones: React.FC<InfoSesionesProps> = ({ fecha, titulo, descripcion, verificacion }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const onInfoClick = () => {
    if (!isPast(new Date(fecha))) {
      setLightboxOpen(true);
    }
  };

  const onCloseLightbox = () => {
    setLightboxOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const lightbox = document.getElementById(`lightbox-${fecha}`);
      if (lightbox && !lightbox.contains(event.target as Node)) {
        onCloseLightbox();
      }
    };

    if (lightboxOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [lightboxOpen, fecha, onCloseLightbox]);

  const fechaSesion = new Date(fecha);
  const sesionPasada = isPast(fechaSesion);

  return (
    <div>
      {sesionPasada && (
        <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
          Esta sesión ya ha pasado
        </div>
      )}
      <div
        id={`lightbox-${fecha}`}
        style={{
          width: '500px',
          height: '200px',
          border: '2px solid #000',
          padding: '10px',
          marginBottom: '20px',
          top: '10px',
          marginLeft: '150px',
          position: 'relative',
          overflow: 'auto',
        }}
        onClick={onInfoClick}
      >
        <h1 style={{ textAlign: 'center', fontSize: '24px', color: 'green', textDecoration: 'underline' }}>{fecha}</h1>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
      {lightboxOpen && <Lightbox onClose={onCloseLightbox} esSesionPasada={verificacion} />}
    </div>
  );
};

export default InfoSesiones;
