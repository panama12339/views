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
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
          {/* <!-- Primary Navigation Menu --> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* <!-- Logo Gabinete Sanacion de la Conducta con fondo --> */}
                    <div className="h-auto w-auto" >
                        <img src='images/logoGabineteSanacionConducta.png'></img>
                    </div>
                
              </div>

                  {/* <!-- Logo Fundacion Educar con fondo --> */}
                    <div className="h-full w-auto bg-customMoradoClaro">
                        <img src='images/logoFundacionEducar.png'></img>
                    </div>

            </div>
          </div>

    
        </nav>

        {/* <!-- Page Content --> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
