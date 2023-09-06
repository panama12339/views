import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function HomePaciente() {
    return (
        <AppLayout
          title="Paciente"
          renderHeader={() => (
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
              Pagina Inicial Paciente
            </h2>
          )}
        >
          <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                <div>Pagina Inicial Paciente</div>
              </div>
            </div>
          </div>
        </AppLayout>
      );
    }
    