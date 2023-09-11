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
        >
            <br/>
            <div className={` min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900 ${visible ? 'visible' : 'collapse'}`}>
              <Titulo>Lista de Usuarios</Titulo>
              <br/>
             <TablaUsuarios datos={usuarios} onClickItem={intercambiar}></TablaUsuarios>
             </div>


             
             <div className={`min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900 ${visible ? 'collapse' : 'visible'}`}>
             <Titulo>Editar usuario</Titulo>
             <br />
             <form method="put" onSubmit={intercambiar}>
      <label>
        Nombre: <input className="mt-4" name="name"  defaultValue={user.name} placeholder="nombre"/>
      </label>
      <br />
      <label>
        Correo: <input className="mt-4" name="email" defaultValue={user.email} placeholder="correo"/>
      </label>
      <br />
      <br />
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
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
          */}
      
      <PrimaryButton onClick={()=>intercambiar(JSON.parse('{}'))}>Cancelar</PrimaryButton>
    <PrimaryButton onClick={()=>intercambiar(JSON.parse('{}'))}>Editar usuario</PrimaryButton>
    </form>

    </div>
             
           
            </AppLayout>
        </LogoLayout>
        
    );
}