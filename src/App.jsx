import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'

function App() {
  const [calculated, setCalculated] = useState(false);
  const [display, setDisplay] = useState('');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState([]);

  const operators = ['/', '*', '-', '+'];
  const numbersDotMinus = /\d|\.|\-/g;
  const language = navigator.language || 'pt-BR';

  const formattedValue = (result) => parseFloat(result).toLocaleString(language, {
      useGrouping: true,
      maximumFractionDigits: 4
    });

  const operationHandler = (value, displayValue) => {
    if(calculated && numbersDotMinus.test(value)) {
      setOperation(value);
      setDisplay(displayValue);
      setCalculated(!calculated);
    }
    if(operation.length === 0 && numbersDotMinus.test(value)) {
      setOperation(operation.concat(value));
      setDisplay(display.concat(displayValue));
    }
    if(!calculated && operation.length >= 1) {
      setOperation(operation.concat(value));
      setDisplay(display.concat(displayValue));
    }
  };

  const equalHandler = () => {
    if(operation === '') return;
    if(!operators.includes(operation[operation.length - 1])) {
      const evaluation = formattedValue(evaluate(operation));
      setHistory([...history, { operation: display, result: evaluation }]);
      setCalculated(true);
    }
  };

  const clearHandler = () => {
    setDisplay('');
    setOperation('');
    setCalculated(false);
  };

  return (
    <div className="background">
      <div className="calculator">
        <div className="display">
          <p className="lastOperation">{calculated ? history[history.length - 1].operation : null}</p>
          <div id="" className="input">{calculated ? history[history.length - 1].result : display}</div>
        </div>
        <div className="keys">
          <button className="button double" onClick={() => clearHandler()}>Clear</button>
          <button className="button op" onClick={() => operationHandler('%', '%')}>%</button>
          <button className="button op" onClick={() => operationHandler('/', ' ÷ ')}>÷</button>
          <button className="button" onClick={() => operationHandler('7', '7')}>7</button>
          <button className="button" onClick={() => operationHandler('8', '8')}>8</button>
          <button className="button" onClick={() => operationHandler('9', '9')}>9</button>
          <button className="button op" onClick={() => operationHandler('*', ' × ')}>×</button>
          <button className="button" onClick={() => operationHandler('4', '4')}>4</button>
          <button className="button" onClick={() => operationHandler('5', '5')}>5</button>
          <button className="button" onClick={() => operationHandler('6', '6')}>6</button>
          <button className="button op" onClick={() => operationHandler('+', ' + ')}>+</button>
          <button className="button" onClick={() => operationHandler('1', '1')}>1</button>
          <button className="button" onClick={() => operationHandler('2', '2')}>2</button>
          <button className="button" onClick={() => operationHandler('3', '3')}>3</button>
          <button className="button op" onClick={() => operationHandler('-', ' - ')}>-</button>
          <button className="button" onClick={() => operationHandler('.', '.')}>.</button>
          <button className="button" onClick={() => operationHandler('0', '0')}>0</button>
          <button className="button double" onClick={() => equalHandler()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;
