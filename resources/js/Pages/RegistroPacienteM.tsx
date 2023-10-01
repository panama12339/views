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
              <Titulo>Registro Paciente Menor</Titulo>
              <LeftMenu onSelectOption={() => {}} />
                <div id="formulario" style={{display: 'flex', border: '5px solid #006400',alignItems: 'center',alignContent:'center'}}>
                    <form action="" >
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center',marginLeft:'50%' }}>
                            <div style={{flex: '1'}}>
                            <input type="text" name="nombre" required placeholder="Nombre" className="form"/><br/>
                            <input type="text" name="apellidos" required placeholder="Apellidos" className="form"/><br/>
                            <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label><br />
                            <input type="date" name="email" required className="form"/><br/>
                            <input type="text" name="universidad" required placeholder="Ocupacion"className="form"/><br/>
                            <input type="text" name="email" required placeholder="Carnet de identidad o equivalente"className="form"
                                id="carnet_identidad" /*ref={carnetRef}
                                onChange={handleCarnetChange}*//><br/>
                    
                           

                    </div>

                  </div>
                      <div style={{flex: 1, marginTop: '50px', marginLeft: '350px'}}>
                        <button type="button"
                        style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff',border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px', width:'180px'}}>Cancelar</button>
                        <button type="submit"
                        style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '100px',width:'180px'}}>Registrar Paciente
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
    