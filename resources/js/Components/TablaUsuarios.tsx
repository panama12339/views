import React from 'react';

interface Props{
    datos:Array<JSON>;
}


export default function TablaUsuarios({datos}:Props){

    console.log(datos)
    return (
        <>
    <table className="table-auto">

        <thead>
    <tr>
      <th>Name</th>
      <th>Mail</th>
    </tr>
  </thead>
  <tbody>
      {datos.map((item:any) => (
       
             <tr  key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      
    </tr>
            
      ))}
  </tbody>
</table>
</>
    );
}