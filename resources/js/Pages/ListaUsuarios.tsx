import React, { useState } from 'react'
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import TablaUsuarios from '@/Components/TablaUsuarios';
import Titulo from '@/Components/Titulo';
import PrimaryButton from '@/Components/PrimaryButton';

interface Props{
    usuarios:Array<JSON>;
}

interface IUser{
  name?: string;
  email?: string;
}

export default function ListaUsuarios({usuarios}:Props){
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState<IUser>({})

  const intercambiar = (item:any) => {
    setVisible((current) => !current);
    setUser(item)
      console.log(visible,user)
    
  };

  function handleSubmit(/*item: any*/) {
    intercambiar
    //alert(item.name);
  }
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
            <div className={`${visible ? 'visible' : 'collapse'}`}>
              <Titulo>Lista de Usuarios</Titulo>
             <TablaUsuarios datos={usuarios} onClickItem={intercambiar}></TablaUsuarios>
             </div>
             <div className={`${visible ? 'collapse' : 'visible'}`}>
             <Titulo>Editar usuario</Titulo>
             <form method="post" onSubmit={intercambiar}>
      <label>
        Nombre: <input name="myInput"  defaultValue={user.name} placeholder="nombre"/>
      </label>
      <hr />
      <label>
        Correo: <input name="myInput2" defaultValue={user.email} placeholder="correo"/>
      </label>
      <hr />
    {/*  <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
      </p>
      <hr />
          */}
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
      
    </form>
    <PrimaryButton onClick={()=>intercambiar(JSON.parse('{}'))}>Editar usuario</PrimaryButton>
    </div>
             </div>
           
            </AppLayout>
        </LogoLayout>
        
    );
}