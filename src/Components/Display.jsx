import React, { useContext } from 'react';
import { CalculatorContext } from '../Context/CalculatorContext';

const Display = () => {
  const {
    calculated,
    display,
    history,
  } = useContext(CalculatorContext);
  return (
    <div className="display">
      <p className="lastOperation">{calculated ? history[history.length - 1].operation : null}</p>
      <div id="" className="input">{calculated ? history[history.length - 1].result : display}</div>
    </div>
  )
};

export default Display;
