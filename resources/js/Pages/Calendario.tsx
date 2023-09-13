import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import LogoLayout from '@/Layouts/LogoLayout';
import Titulo from '@/Components/Titulo';
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import CustomButton from '@/Components/CustomButton';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Calendario() {

  /*interface TimezoneConfig {
    timezoneName: string;
    displayLabel?: string;
    tooltip?: string;
  }
  
  interface TimezoneOptions {
    zones?: TimezoneConfig[];
    customOffsetCalculator?: (timezoneName: string, timestamp: number) => number;
  }*/

  function formatTime(time:any) {
    const hours = `${time.getHours()}`.padStart(2, '0');
    const minutes = `${time.getMinutes()}`.padStart(2, '0');
  
    return `${hours}:${minutes}`;
  }

  //documentacion de parametros https://github.com/nhn/tui.calendar/blob/main/docs/en/apis/options.md#eventfilter 
  const calendar = new Calendar('#calendar', {
  defaultView: 'week',
  useFormPopup: false,
  useDetailPopup: true,
  isReadOnly: true,
  usageStatistics: false,
  eventFilter: (event) => event.isVisible!!,
  week: {
    startDayOfWeek: 1, //Monday
    dayNames: [ 'Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'], //este string debe cambiar dependiendo de region
    narrowWeekend: false,
    workweek: false,
    showNowIndicator: false,
    //showTimezoneCollapseButton: false,
    //timezonesCollapsed: true,
    hourStart: 6,
    hourEnd: 24,
    eventView: ['time'],
    taskView: false,
    collapseDuplicateEvents:false,
  },
  gridSelection: {
    enableDblClick: true,
    enableClick: true,
  },
  
  /*timezone: {
    zones: [
      {
        timezoneName: 'Europe/London',
      },
    ],
  },*/
  theme: {
    week: {
      today: {
        color: 'blue',
      },
      /*gridSelection: {
        color: 'grey',
      },*/
      timeGrid: {
        borderRight: '1px solid #e5e5e5',
      },
    },
  },
  template: {
    time(event) {
      const { start, end, title, isVisible } = event;

        return `<span style="color: red;">${formatTime(start)}~${formatTime(end)} ${title}</span>`;

      
    },

  },
  calendars: [
    {
      id: 'cal1',
      name: 'Personal',
      backgroundColor: '#03bd9e',
    },
    {
      id: 'cal2',
      name: 'Work',
      backgroundColor: '#00a9ff',
    },
  ],
});

const previousWeek = () => {
  calendar.prev()
};

const nextWeek = () => {
  calendar.next()
};

    return (
      <LogoLayout>
        <AppLayout
          title="Psicologo"
        >
            <br/>
            <div className={` min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900`}>
              <Titulo>Calendario</Titulo>
              <br/>
              <div className='flex-row'>
              <PrimaryButton onClick={(previousWeek)}>Anterior Semana</PrimaryButton>
<PrimaryButton onClick={(nextWeek)}>Siguiente Semana</PrimaryButton>
              </div>

              <div id="calendar" className="w-[800px] h-[800px] bg-customMoradoClaro">
                <div className='collapse'>calendar.render()</div>
              </div>
            <div>Copyright (c) 2021 NHN Corp.</div>
            </div>

            <br/>

        </AppLayout>
      </LogoLayout>
    );
  }
    