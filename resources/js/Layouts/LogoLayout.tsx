import { router } from '@inertiajs/core';
import { Link, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import Banner from '@/Components/Banner';


interface Props {
  renderHeader?(): JSX.Element;
}

export default function AppLayout({
  children,
}: PropsWithChildren<Props>) {

  return (
    <div>
      <Head/>

      <Banner />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">



        <nav className="m-2 bg-white dark:bg-gray-800">
            
                <div className="grid grid-cols-2 gap-20 max-h-24">
                        {/* <!-- Logo Gabinete Sanacion de la Conducta con fondo --> */}
                        <img className="justify-self-star self-center max-h-24" src='http://localhost:8000/images/logoGabineteSanacionConducta.png'></img>
                       
                        {/* <!-- Logo Fundacion Educar con fondo --> */}
                        <img className="justify-self-end self-center max-h-24 bg-customMoradoClaro" src='http://localhost:8000/images/logoFundacionEducar.png'></img> 
                </div>

        </nav>

        {/* <!-- Page Content --> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
