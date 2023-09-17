import React from 'react';
import ReactDOM from 'react-dom';

const Images: React.FC = () => {
  return (
    <div>
      <img
        src="/images/logoGabineteSanacionConducta.png"
        alt=""
        className="header-images"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '25%',
          height: '20%',
          zIndex: -1,
          objectFit: 'cover'
        }}
      />
      <img
        src="/images/logoFundacionEducar.png"
        alt=""
        className="images"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '25%',
          height: '20%',
          zIndex: -1,
          backgroundColor: '#c084adc9',
          display: 'inline-block',
          padding: '10px',
          borderRadius: '0 0 0 50px',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

ReactDOM.render(<Images />, document.getElementById('image'));

export default Images;
