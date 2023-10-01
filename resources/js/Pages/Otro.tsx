import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
import LeftMenu from '@/Components/LeftMenu';
import '@/Hooks/style.css';

export default function HomePaciente() {
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
                                <label htmlFor="">Pregunta de seguridad N 1</label><br/>
                            <input type="text" name="nombre" required placeholder="Respuesta 1" className="form"/><br/>
                            <label htmlFor="">Pregunta de seguridad N 2</label><br/>
                            <input type="text" name="apellidos" required placeholder="Respuesta 2" className="form"/><br/>
                            <label htmlFor="">Pregunta de seguridad N 3</label><br/>
                            <input type="text" name="universidad" required placeholder="Respuesta 3 "className="form"/><br/>
                            <label htmlFor="">Pregunta de seguridad N 4 </label><br/>
                            <input type="text" name="universidad" required placeholder="Respuesta 4 "className="form"/><br/>
                       
                           

                    </div>

                  </div>
                      <div style={{flex: 1, marginTop: '50px', marginLeft: '350px'}}>
                        <button type="button"
                        style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff',border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px', width:'180px'}}>Cancelar</button>
                        <button type="submit"
                        style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '50px',width:'200px'}}>Cambiar Contraseña
                        </button>
                    </div> 
                </form>

              </div>

              </div>
              <br/>
        </AppLayout>
        </LogoLayout>
      );
    }
    