import React, { useState } from 'react';

const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operation, setOperation] = useState('+');
  const [operand2, setOperand2] = useState('');

  const calculate = () => {
    // You can implement the logic for calculating the result here
    // For example, you can retrieve values from the state and perform the calculation
    console.log('Operand 1:', operand1);
    console.log('Operation:', operation);
    console.log('Operand 2:', operand2);

    // Perform the calculation and display the result as needed
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Operand 1 Column */}
        <div className="col-md-4">
          <label htmlFor="operand1">Operand 1</label>
          <input
            type="text"
            className="form-control"
            id="operand1"
            placeholder="Enter Operand 1"
            value={operand1}
            onChange={(e) => setOperand1(e.target.value)}
          />
        </div>

        {/* Operation Column */}
        <div className="col-md-4">
          <label htmlFor="operation">Operation</label>
          <select
            className="form-control"
            id="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
        </div>

        {/* Operand 2 Column */}
        <div className="col-md-4">
          <label htmlFor="operand2">Operand 2</label>
          <input
            type="text"
            className="form-control"
            id="operand2"
            placeholder="Enter Operand 2"
            value={operand2}
            onChange={(e) => setOperand2(e.target.value)}
          />
        </div>
      </div>

      {/* Calculate Button */}
      <div className="row mt-3">
        <div className="col-md-12">
          <button className="btn btn-success" onClick={calculate}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
