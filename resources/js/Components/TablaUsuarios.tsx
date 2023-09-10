import React from 'react';
import PrimaryButton from './PrimaryButton';

interface Props{
    datos:Array<JSON>;
    onClickItem: (item:JSON) =>void;
}


export default function TablaUsuarios({datos,onClickItem}:Props){

    //console.log(datos)

    function handleClick() {
      //alert(item.id);
    }

    return (
        <>
    <table className="table-auto">

        <thead>
    <tr>
      <th>Nombre</th>
      <th>Correo</th>
    </tr>
  </thead>
  <tbody>
      {datos.map((item:any) => (
       
             <tr  key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td><PrimaryButton onClick={()=>onClickItem(item)}>Editar usuario</PrimaryButton></td>
      
    </tr>
            
      ))}
  </tbody>
</table>
</>
    );
}