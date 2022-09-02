import React from 'react';
import Display from './Display';
import './Calculator.css';
import Keys from './Keys';

const Calculator = () => {
  return (
    <div className='background'>
      <div className='calculator'>
        <Display />
        <Keys />
      </div>
    </div>
  );
};

export default Calculator;
