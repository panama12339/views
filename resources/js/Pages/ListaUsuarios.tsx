import React, { useRef, useState } from 'react'
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import TablaUsuarios from '@/Components/TablaUsuarios';
import Titulo from '@/Components/Titulo';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import useRoute from '@/Hooks/useRoute';
import CustomButton from '@/Components/CustomButton';

interface Props{
    users:Array<JSON>;
}

interface User{
  id: string
  name: string;
  email: string;
}

export default function ListaUsuarios({users}:Props){
  console.log(users)
  const route = useRoute();
  const [switchVisibility, setSwitchVisibility] = useState(true);
  const nameInput= useRef(null)
  const emailInput= useRef(null)
  const{data,setData,put,processing,reset,errors} = useForm({
    id:'',name:'',email:''
  })

  const mostrarForm = (user: User) => {
    setSwitchVisibility(false);
    setData({id:user.id,name:user.name,email:user.email});
  };

  const ocultarForm = () => {
    setSwitchVisibility(true);
  };

  const update = (e:any) => {
    e.preventDefault();
    setSwitchVisibility(true);
    put(route('usuarios.update',data.id),{
      onSuccess:()=>{
        alert("Exito")
      },
      onError:()=>{
        if(errors.name){
          reset('name')
        }
        if(errors.email){
          reset('email')
        }
      },
    });
    
  };
    return (
        <LogoLayout>
            <AppLayout
          title="ListaUsuarios"
        >
            <br/>
            <div className={` min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900 ${switchVisibility ? 'visible' : 'collapse'}`}>
              <Titulo>Lista de Usuarios</Titulo>
              <br/>
             <TablaUsuarios datos={users} onClickItem={mostrarForm}></TablaUsuarios>
             </div>

             <div className={`min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900 ${switchVisibility ? 'collapse' : 'visible'}`}>
             <Titulo>Editar usuario</Titulo>
             <br />
             <form className="w-[350px]" onSubmit={update}>
              <div className="mt-4"> 
                  <TextInput
                    id="name"
                    name="name"
                    ref={nameInput}
                    className="mt-1 block w-full isFocused "
                    value={data.name}
                  onChange={e => setData('name', e.target.value)}
                    required
                    
                    placeholder="nombre"
                  />
                  <InputError className="mt-2" message={errors.name} />
                </div>
                <br />
                <div className="mt-4">
                    {/*<InputLabel htmlFor="name"></InputLabel>*/}  
                    <TextInput
                      id="email"
                      name="email"
                      ref={emailInput}
                      className="mt-1 block w-full "
                      value={data.email}
                    onChange={e => setData('email', e.target.value)}
                      required
                      
                      placeholder="email"
                    />
                    <InputError className="mt-2" message={errors.email} />
                  </div>
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
      
     
                <CustomButton onClick={()=>update}>Editar usuario</CustomButton>
              </form>
              <br/>
              <PrimaryButton   onClick={()=>ocultarForm()}>Cancelar</PrimaryButton>
            </div>
             
           
            </AppLayout>
        </LogoLayout>
        
    );
}