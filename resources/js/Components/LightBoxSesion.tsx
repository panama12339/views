import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface LightboxProps {
  onClose: () => void;
  esSesionPasada: boolean;
  confir: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ onClose , esSesionPasada,confir }) => {
  const [descripcion, setDescripcion] = useState('');
  const handleTextAreaClick = (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
    e.stopPropagation(); // Detiene la propagación del evento
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        width: '500px',
        height: '500px',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
      }}>
        <h2>Detalles adicionales</h2>
        {/* Agrega los detalles adicionales aquí */}
        {confir &&(
          <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          onClick={handleTextAreaClick}
          placeholder="Calificacion..."
          rows={4}
          cols={50}
        />
        )}
         {!esSesionPasada && (
           
          <>
           
            <button
              onClick={onClose}
              style={{
                padding: '10px 20px',
                background: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: '5px' }} />
              Pagar
            </button>
            <button
              style={{
                padding: '10px 20px',
                background: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faTimesCircle} style={{ marginRight: '5px' }} />
              Cancelar sesión
            </button>
            
          </>
          
        )}
        
      </div>
    </div>
  );
};

export default Lightbox;
