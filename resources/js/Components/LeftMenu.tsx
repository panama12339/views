import React, { useState } from 'react';

interface LeftMenuProps {
  onSelectOption: (option: string) => void;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div style={{
      width: '200px',
      height: '500px',
      backgroundColor: '#ffff',
      padding: '10px',
      position: 'absolute',
      left: '0',
      bottom: '0',
      border: '2px solid black',
      top: '400px'
    }}>
      <h2>Menu</h2>
      <ul>
        <li
          style={{ cursor: 'pointer', marginBottom: '10px', fontWeight: selectedOption === 'Option 1' ? 'bold' : 'normal' }}
          onClick={() => handleOptionClick('Option 1')}
        >
          Opcion 1
        </li>
        <li
          style={{ cursor: 'pointer', marginBottom: '10px', fontWeight: selectedOption === 'Option 2' ? 'bold' : 'normal' }}
          onClick={() => handleOptionClick('Option 2')}
        >
          Opcion
        </li>
        <li
          style={{ cursor: 'pointer', marginBottom: '10px', fontWeight: selectedOption === 'Option 3' ? 'bold' : 'normal' }}
          onClick={() => handleOptionClick('Option 3')}
        >
         Opcion 3
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
