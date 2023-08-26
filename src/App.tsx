import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Button from './Button';
import Card from './Card';
import Select from './Select';
import Table from './Table';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [tableData, setTableData] = useState([
    { name: 'Usaid', age: 17, location: 'Karachi', },
    { name: 'Ahmed', age: 19, location: 'Islamabad' },
    {name:'Kifal',age:'18',location:'Lahore'}

  ]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleButtonClick = () => {
    
  };

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="App">
      <h1>Dynamic Components Example</h1>
<h1>INPUT COMPONENT:</h1>
<br></br>
      <Input value={inputValue} onChange={handleInputChange} />
      <br></br>
      <br></br>
<h1>BUTTON COMPONENT:</h1>
<br></br>
      <Button label="Click Me" onClick={handleButtonClick} />
      <br></br>
      <br></br>
      <h1>CARD COMPONENT:</h1>
<div className='div'>
      <Card  title="CARD:01" content="My name is Muhammad Usaid Muhammad Asif and this is my first card by using Typescript My name is Muhammad Usaid Muhammad Asif and this is my first card by using Typescript "  />
      <Card title="CARD:02" content="My name is Muhammad Usaid Muhammad Asif and this is my first card by using Typescript My name is Muhammad Usaid Muhammad Asif and this is my first card by using Typescript " />
      <Card title="CARD:03" content="My name is Muhammad Usaid Muhammad Asif and this is my first card by using Typescript My name is Muhammad Usaid Muhammad Asif and this is my first card by using Typescript " />
      </div>
      
<h1>SELECT COMPONENT:</h1>
      <Select
         options={[
          {  label: 'shershah', value: 'shersha' },
          {  label: 'islamabad', value: 'islamabad' },
          { label:'lahore' , value:'lahore'},
          { label:'karachi' , value:'karachi'},
          { label:'kahdda-market' , value:'kahdda-market'},
          { label:'kharadar' , value:'kharadar'}
        ]}
        value={selectedOption}
        onChange={handleSelectChange}
      />            
<h1>TABLE COMPONENT:</h1>
      <Table data ={tableData} />
    </div>
  );
}

export default App;
