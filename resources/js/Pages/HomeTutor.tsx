import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
export default function HomeTutor() {
    return (
      <LogoLayout>
        <AppLayout
          title="Tutor"

        >
                   <br/>
            <div className={` min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900`}>
              <Titulo>Home Tutor</Titulo>
              </div>
              <br/>
        </AppLayout>
        </LogoLayout>
      );
    }
    