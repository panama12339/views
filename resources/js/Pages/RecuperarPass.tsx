import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
import LeftMenu from '@/Components/LeftMenu';
import '@/Hooks/style.css';
import { useNavigate } from 'react-router-dom';
import { InertiaLink } from '@inertiajs/inertia-react';


export default function RecuperarPass() {
    return (
      <LogoLayout>
        <AppLayout
          title="Paciente"
        >
          <br/>
            <div className={` min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900`}>
              <Titulo>Recuperar Contraseña</Titulo>
              <LeftMenu onSelectOption={() => {}} />
                <div id="formulario" style={{display: 'flex', border: '5px solid #006400',alignItems: 'center',alignContent:'center'}}>
                    <form action="" >
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center',marginLeft:'50%' }}>
                            <div style={{flex: '1'}}>
                            <input type="text" name="nombre" required placeholder="Ingrese su CI" className="form"/><br/>
                    </div>

                  </div>
                      <div style={{flex: 1, marginTop: '50px', marginLeft: '350px'}}>
                        <button type="button"
                        style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff',border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px', width:'180px'}}>Cancelar</button>
                        <InertiaLink href="/Otro" style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff',border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px', width:'180px'}}>Recuperar Contraseña</InertiaLink>
                       
                    </div> 
                </form>

              </div>

              </div>
              <br/>
        </AppLayout>
        </LogoLayout>
      );
}