import React, { useRef,  ChangeEvent,useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
import '@/Hooks/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LeftMenu from '@/Components/LeftMenu';

export default function Registro() {
  const carnetRef = useRef<HTMLInputElement>(null);
  const telefonoRef = useRef<HTMLInputElement>(null);

  const handleCarnetChange = () => {
    if (carnetRef.current) {
        carnetRef.current.value = carnetRef.current.value.replace(/[^\d]/g, '');
    }
}

const handleTelefonoChange = () => {
  if (telefonoRef.current) {
    telefonoRef.current.value = telefonoRef.current.value.replace(/\D/g, '');
    if (telefonoRef.current.value.length > 8) {
      telefonoRef.current.value = telefonoRef.current.value.slice(0, 8);
    }
  }
}
const [fileEntries, setFileEntries] = useState<JSX.Element[]>([]);
  const fileListContainerRef = useRef<HTMLInputElement>(null);

  const showSelectedFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const fileListContainer = fileListContainerRef.current;
    const files = event.target.files;

    if (files) {
      const newFileEntries = Array.from(files).map((file, i) => (
        <div key={i}>
          <span>{file.name}</span>
          <button type="button" onClick={() => removeFile(i)}>
            <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
          </button>
        </div>
      ));

      setFileEntries(prev => [...prev, ...newFileEntries]);
    }
  }

  const removeFile = (index: number) => {
    setFileEntries(prev => prev.filter((_, i) => i !== index));
  }
    return (

      <LogoLayout>
        <AppLayout
          title="Paciente"
        >
          <br/>
            <div className={` min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900`}>
              <Titulo>Registrar Psicologo</Titulo>
              <LeftMenu onSelectOption={() => {}} />
              <div id="formulario" style={{ border: '5px solid #006400' }}>
                <form action="" >
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center',marginTop:'25px'}}>
                    <div style={{flex: '1'}}>
                      <input type="text" name="nombre" required placeholder="Nombre" className="form"/><br/>
                      <input type="text" name="apellidos" required placeholder="Apellidos" className="form"/><br/>
                       <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label><br />
                      <input type="date" name="email" required className="form"/><br/>
                      <label htmlFor="fechatitulo">Fecha de funcion de titulo:</label><br />
                      <input type="date" name="fecha_funcion_titulo" required
                          placeholder="Fecha de función de título"className="form"/><br/>
                      <input type="text" name="universidad" required placeholder="Universidad"className="form"/><br/>
                      <input type="text" name="ciudad_residencia" required placeholder="Ciudad de residencia"className="form"/><br/>
                      <input type="text" name="pais_residencia" required placeholder="País de residencia"className="form"/><br/>
                      <input type="text" name="email" required placeholder="Carnet de identidad"className="form"
                        id="carnet_identidad" ref={carnetRef}
                        onChange={handleCarnetChange}/><br/>
                      <input type="password" name="email" required placeholder="Contraseña"className="form"
                        id="contrasenia"/><br/>
                      <input type="password" name="email" required placeholder="Repetir contraseña"className="form"/><br/>
                      <div style={{flex: 1, marginTop: '-470px', marginLeft: '350px'}}>
                        <div style={{position:'relative'}}>
                          <input type="file" id="archivo" name="archivo" accept=".pdf,.doc,.docx " onChange={showSelectedFiles}
                            style={{position:'absolute', left:'0', top:'0', opacity:'0', zIndex: '-1'}}/>
                          <label htmlFor="archivo"
                            style={{cursor:'pointer', padding: '10px 20px',color: '#312121', borderRadius: '5px', border:'2px solid #6f6d6d', height:'30px', display:'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1',marginBottom:'10px',width:'300px'}}>Adjuntar
                            archivo/s CV</label>
                          </div>

                        <div id="fileList" ref={fileListContainerRef}>{fileEntries}</div>
                          <textarea id="descripcion" name="descripcion" rows={Number("12")} cols={50} placeholder="Descripción..."></textarea><br/>
                          <button type="button"
                          style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff',border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '45px', width:'180px'}}>Cancelar</button>
                          <button type="submit"
                          style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '5px'}}>Registrar
                          Psicologo</button>
                      </div>
                      <div style={{flex: '1', marginTop: '-400px',marginLeft: '850px'}}>
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
                            className="form" id="numero_telefono"  ref={telefonoRef} onChange={handleTelefonoChange} style={{marginTop:'10px',width:'210px'}}/>
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
                </form>

              </div>

            </div>
              <br/>
              
        </AppLayout>
        </LogoLayout>
      );
    }
    