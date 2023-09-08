import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import TablaUsuarios from '@/Components/TablaUsuarios';
import Titulo from '@/Components/Titulo';

interface Props{
    usuarios:Array<JSON>;
}
export default function ListaUsuarios({usuarios}:Props){
    return (
        <LogoLayout>
            <AppLayout
          title="ListaUsuarios"
          renderHeader={() => (
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight bg-customMoradoOscuro">
              Pagina Lista de Usuarios
            </h2>
          )}
        >
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
             <Titulo>Lista de Usuarios</Titulo>
             <TablaUsuarios datos={usuarios}></TablaUsuarios>
             </div>
            </AppLayout>
        </LogoLayout>
        
    );
}