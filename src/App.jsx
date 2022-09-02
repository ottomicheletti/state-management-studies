import Calculator from './Components/Calculator';
import React from 'react';
import { CalculatorProvider } from './Context/CalculatorContext';

function App() {
 return (
  <CalculatorProvider>
    <Calculator />
  </CalculatorProvider>
 )
}

export default App;
