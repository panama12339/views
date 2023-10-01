import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
import InfoSesiones from '@/Components/InfoSesiones';
import InfoPaciente from '@/Components/InfoPaciente'; 
import { format, isPast } from 'date-fns';
import es from 'date-fns/locale/es';
import MenuTutor from '@/Components/MenuTutor';

export default function SesionesPaciente() {
  const [nombrePaciente, setNombrePaciente] = useState("");
  
  
  const sesiones: {
    fecha: Date;
    titulo: string;
    descripcion: string;
   
  }[] = [
    {
      fecha: new Date("2023-09-09"),
      titulo: " importante 1",
      descripcion: "Descripción detallada   1."
    },
    {
      fecha: new Date("2023-09-25"),
      titulo: " importante 2",
      descripcion: "Descripción detallada   2."
    },
    {
      fecha: new Date("2023-09-15"),
      titulo: " importante 2",
      descripcion: "Descripción detallada   2."
    },
    {
      fecha: new Date("2023-10-30"),
      titulo: " importante 2",
      descripcion: "Descripción detallada   2."
    },
  ];

  sesiones.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());

  const fechaActual = new Date();
  const sesionesPasadas = sesiones.filter((sesion) => isPast(sesion.fecha));
  const sesionesFuturas = sesiones.filter((sesion) => !isPast(sesion.fecha));
  const fechaFormateada = format(sesiones[0].fecha, "d 'de' MMMM 'de' yyyy", { locale: es });
  const handleSelectOption = (option: string) => {
    if (option === 'Option 1') {
      setNombrePaciente(`${option}`);
    }else{
      setNombrePaciente(`${option}`);
    }
  };
  return (
    <LogoLayout>
      <AppLayout title="Paciente">
        <br/>
        <div className={`min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900`}>
          <Titulo>Sesiones Paciente</Titulo>
          <MenuTutor onSelectOption={handleSelectOption} />
          <div style={{ border: '5px solid green', width: '65%', height: '500px', position: 'relative' }}>
          <div><InfoPaciente nombre={nombrePaciente} edad={30} /></div>
            <div style={{ overflowY: 'auto', height: '340px', marginTop: '150px' }}>
      {sesionesPasadas.length > 0 && (
        <>
          <h2>Sesiones Pasadas</h2>
          {sesionesPasadas.map((sesion, index) => (
            <InfoSesiones
              key={index}
              fecha={format(sesion.fecha, "d 'de' MMMM 'de' yyyy", { locale: es })}
              titulo={sesion.titulo}
              descripcion={sesion.descripcion}
              verificacion={true}
              confir={true}
              
              //onInfoClick={() => {}}
            />
          ))}
        </>
      )}

      {sesionesFuturas.length > 0 && (
        <>
          <h2>Proximas Sesiones</h2>
          {sesionesFuturas.map((sesion, index) => (
            <InfoSesiones
              key={index}
              fecha={format(sesion.fecha, "d 'de' MMMM 'de' yyyy", { locale: es })}
              titulo={sesion.titulo}
              descripcion={sesion.descripcion}
              verificacion={false}
              confir={false}
              
              //onInfoClick={() => {}}
            />
          ))}
        </>
      )}
    </div>
          </div>
        </div>
        <br/>
      </AppLayout>
    </LogoLayout>
  );
}
