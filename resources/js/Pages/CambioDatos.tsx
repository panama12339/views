import React, { useRef,  ChangeEvent,useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
import '@/Hooks/cambiodatos.css';
import LeftMenu from '@/Components/LeftMenu';
export default function CambioDatos() {
  const telefonoRef = useRef<HTMLInputElement>(null);

const handleTelefonoChange = () => {
  if (telefonoRef.current) {
    telefonoRef.current.value = telefonoRef.current.value.replace(/\D/g, '');
    if (telefonoRef.current.value.length > 8) {
      telefonoRef.current.value = telefonoRef.current.value.slice(0, 8);
    }
  }
}
    return (
      <LogoLayout>
        <AppLayout
          title="Tutor"
        >
                   <br/>
            <div className={` min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900`}>
            <Titulo >CAMBIO DE DATOS</Titulo>
            <LeftMenu onSelectOption={() => {}} />
              <div className="Contianer">
       
        <form action="" id="formulario" style={{display: 'flex'}}>
            <input type="text" placeholder="Correo actual" className="form"/>
            <input type="text" placeholder="Correo nuevo" className="form"/>
            <input type="text" placeholder="Numero actual" className="form" id="numero_telefono" ref={telefonoRef} onChange={handleTelefonoChange}/>
            <div style={{display: 'flex', alignItems: 'flex-start', justifyContent:'center'}}>
                <select name="codigo_pais" style={{marginLeft:'-94px',marginTop:'-10px', marginRight:'10px'}}>
                    <option value="1">+1</option>
                    <option value="44">+44 </option>
                </select>
                <input type="text" placeholder="Numero nuevo" className="form" id="numero_telefono" ref={telefonoRef} onChange={handleTelefonoChange}/>

            </div>


            <button type="submit"
                style={{padding: '10px 20px', backgroundColor: '#007bff',color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '68px'}}>Guardar</button>
        </form>
    </div>
              
              </div>
              <br/>
        </AppLayout>
        </LogoLayout>
      );
    }
    