// Componente MenuTutor
import React, { useState } from 'react';
import Select from 'react-select';

interface MenuTutorProps {
  onSelectOption: (option: string) => void;
}

const MenuTutor: React.FC<MenuTutorProps> = ({ onSelectOption }) => {
  const options = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState<{ label: string, value: string } | null>(null);

  const handleOptionChange = (option: { label: string, value: string }) => {
    setSelectedOption(option);
    onSelectOption(option.value);
  };

  return (
    <div style={{
      width: '200px',
      backgroundColor: '#ffff',
      padding: '10px',
      position: 'absolute',
      left: '0',
      bottom: '0',
      border: '2px solid black',
      top: '400px'
    }}>
      <h2>Menu Tutor</h2>
      <ul>
        <li>Pacientes: </li>
        <Select
            options={options}
            value={selectedOption}
            onChange={(option) => option && handleOptionChange(option)}

            />
        <li>Otro</li>
        <li>Datos </li>
      </ul>
    </div>
  );
};

export default MenuTutor;
