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
              <Titulo>Registro Tutor</Titulo>
              <LeftMenu onSelectOption={() => {}} />
                <div id="formulario" style={{ border: '5px solid #006400' }}>
                    <form action="" >
                    <div style={{flex: '1', marginTop: '10px', marginLeft: '150px'}}>
                            Tipo de <br/>Usuari@<br/>
                            <div style={{flex:'1', marginTop: '-50px',marginLeft: '150px', marginBottom:'70px'}}>
                                <input type="radio" name="metodo_confirmacion" value=""style={{marginTop:'3px'}}/>Paciente<br/>
                                <input type="radio" name="metodo_confirmacion" value="" style={{marginTop:'3px'}}/> Tutor<br/>
                            </div>

                         </div>
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center',marginTop:'25px',marginLeft: '150px'}}>
                            <div style={{flex: '1'}}>
                            <input type="text" name="nombre" required placeholder="Nombre" className="form"/><br/>
                            <input type="text" name="apellidos" required placeholder="Apellidos" className="form"/><br/>
                            <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label><br />
                            <input type="date" name="email" required className="form"/><br/>
                            <input type="text" name="universidad" required placeholder="Ocupacion"className="form"/><br/>
                            <input type="text" name="email" required placeholder="Carnet de identidad o equivalente"className="form"
                                id="carnet_identidad" /*ref={carnetRef}
                                onChange={handleCarnetChange}*//><br/>
                            <input type="password" name="email" required placeholder="Contraseña"className="form"
                                id="contrasenia"/><br/>
                            <input type="password" name="email" required placeholder="Repetir contraseña"className="form"/><br/>
                           
                        <div style={{flex: '1', marginTop: '-46%',marginLeft: '500px'}}>
                             <input type="text" name="email" required placeholder="Correo" className="form" style={{marginTop:'20px'}}/><br/>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom:'50px'}}>
                            <select name="codigo_pais">
                                <option value="1">+595</option>
                                <option value="44">+57</option>
                                <option value="44">+591</option>
                                <option value="44">+54</option>
                                <option value="44">+55</option>
                                <option value="44">+51</option>
                                <option value="44">+598</option>
    
                            </select>
                            <input type="text" name="numero_telefono" required placeholder="Número de teléfono"
                            className="form" id="numero_telefono"  /*ref={telefonoRef} onChange={handleTelefonoChange}*/ style={{marginTop:'10px',width:'210px'}}/>
                        </div>
                         <div style={{flex: '1', marginTop: '-30px', marginLeft: '5px'}}>
                            Metodo de <br/>confirmacion<br/> de cuenta
                            <div style={{flex:'1', marginTop: '-70px',marginLeft: '120px', marginBottom:'50px'}}>
                                <input type="radio" name="metodo_confirmacion" value="email"style={{marginTop:'3px'}}/> Correo Electrónico<br/>
                                <input type="radio" name="metodo_confirmacion" value="sms" style={{marginTop:'3px'}}/> Whatsapp<br/>
                                <input type="radio" name="metodo_confirmacion" value="llamada" style={{marginTop:'3px'}}/> Telegram<br/>
                                <input type="radio" name="metodo_confirmacion" value="llamada" style={{marginTop:'3px'}}/> sms<br/>
                            </div>

                         </div>
                        <input type="text" name="email" required placeholder="Pregunta de seguridad 1"
                            className="form"/><br/>
                        <input type="text" name="email" required placeholder="Pregunta de seguridad 2"
                            className="form"/><br/>
                        <input type="text" name="email" required placeholder="Pregunta de seguridad 3"
                            className="form"/><br/>
                        <input type="text" name="email" required placeholder="Pregunta de seguridad 4"
                            className="form"/><br/>
                            

                     </div>

                    </div>

                  </div>
                      <div style={{flex: 1, marginTop: '-10px', marginLeft: '350px'}}>
                        <button type="button"
                        style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff',border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px', width:'180px'}}>Cancelar</button>
                        <button type="submit"
                        style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '100px',width:'180px'}}>Registrarse
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
    