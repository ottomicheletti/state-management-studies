import React, { createContext, useState, useEffect, useMemo } from 'react';

export const CalculatorContext = createContext(null);

export const CalculatorProvider = ({ children }) => {
  const [calculated, setCalculated] = useState(false);
  const [display, setDisplay] = useState('');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState([]);

  const state = useMemo(
    () => ({
      calculated,
      setCalculated,
      display,
      setDisplay,
      operation,
      setOperation,
      history,
      setHistory,
    }),
    [calculated, operation, history],
  );

  return (
    <CalculatorContext.Provider value={ state }>{children}</CalculatorContext.Provider>
  );
};
