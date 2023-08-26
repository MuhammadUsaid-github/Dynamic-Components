import React from 'react';
import './Input.css'

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input className='input' type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default Input;
