import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
import LeftMenu from '@/Components/LeftMenu';
import '@/Hooks/style.css';

export default function HomePaciente() {
    const [invalidInput, setInvalidInput] = useState('');
    const [horario, setHorario] = useState({
        lunes: '',
        martes: '',
        miercoles: '',
        jueves: '',
        viernes: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setHorario({
            ...horario,
            [name]: value
        });

        if (['lunes', 'martes', 'miercoles', 'jueves', 'viernes'].includes(name)) {
            const pattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

            if (!value.match(pattern)) {
                setInvalidInput(name);
            } else if (name === invalidInput) {
                setInvalidInput('');
            }
        }
    }

    const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const confirmacion = window.confirm("¿Estás seguro de establecer este horario?");

        if (confirmacion) {
            const formIsValid = Object.values(horario).some(value => value.trim() !== '');

            if (formIsValid) {
                const horarioForm = e.target as HTMLFormElement;
                if (horarioForm) {
                    horarioForm.submit();
                }
            } else {
                alert('Por favor, completa al menos un campo');
            }
        }
    }

    return (
        <LogoLayout>
            <AppLayout title="Paciente">
                <br />
                <div className={`min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900`}>
                    <Titulo>Disponibilidad de Horarios</Titulo>
                    <LeftMenu onSelectOption={() => {}} />
                    <div id="formulario" style={{ display: 'flex', border: '5px solid #006400', alignItems: 'center', alignContent: 'center' }}>
                        <form action="" id='horario'>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '50%' }}>
                                <div style={{ flex: '1' }}>
                                    <label htmlFor="">Lunes:</label><br />
                                    <input type="text" name="lunes" value={horario.lunes} onChange={handleInputChange} required placeholder="Horario (HH:mm)" className="form" pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$" /><br />
                                    {invalidInput === 'lunes' && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '-30px', marginBottom: '10px' }}>Formato de hora incorrecto</div>}
                                    <label htmlFor="">Martes:</label><br />
                                    <input type="text" name="martes" value={horario.martes} onChange={handleInputChange} required placeholder="Horario (HH:mm) " className="form" pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$" /><br />
                                    {invalidInput === 'martes' && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '-30px', marginBottom: '10px' }}>Formato de hora incorrecto</div>}
                                    <label htmlFor="">Miercoles:</label><br />
                                    <input type="text" name="miercoles" value={horario.miercoles} onChange={handleInputChange} required placeholder="Horario (HH:mm) " className="form" pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$" /><br />
                                    {invalidInput === 'miercoles' && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '-30px', marginBottom: '10px' }}>Formato de hora incorrecto</div>}
                                    <label htmlFor="">Jueves:</label><br />
                                    <input type="text" name="jueves" value={horario.jueves} onChange={handleInputChange} required placeholder="Horario (HH:mm) " className="form" pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$" /><br />
                                    {invalidInput === 'jueves' && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '-30px', marginBottom: '10px' }}>Formato de hora incorrecto</div>}
                                    <label htmlFor="">Viernes:</label><br />
                                    <input type="text" name="viernes" value={horario.viernes} onChange={handleInputChange} required placeholder="Horario (HH:mm) " className="form" pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$" /><br />
                                    {invalidInput === 'viernes' && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '-30px', marginBottom: '10px' }}>Formato de hora incorrecto</div>}
                                </div>
                            </div>
                            <div style={{ flex: 1, marginTop: '50px', marginLeft: '350px' }}>
                                <button type="button" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px', width: '180px' }}>Cancelar</button>
                                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '50px', width: '200px' }} onClick={handleFormSubmit}>Establecer Horario</button>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
            </AppLayout>
        </LogoLayout>
    );
}
