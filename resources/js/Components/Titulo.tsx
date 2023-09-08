import React from 'react';

interface Props{
    children?:String;
    textSize?:String;
    textColor?:String;
}
export default function Title({children='Sin Titulo',textSize='text-3xl',textColor='text-customVerdeOscuro'}:Props){
    return (
    <div className={`${textSize} ${textColor}`}>{children}</div>
    );
}