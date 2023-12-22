import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import './App.css';

function App() {
  const [operand1, setOperand1] = useState('');
  const [operation, setOperation] = useState('+');
  const [operand2, setOperand2] = useState('');
  const [result, setResult] = useState('');
  const [resultsArray, setResultsArray] = useState([]);

  const calculate = async () => {
    try {
      const response = await axios.post('http://localhost:3001/calculate', {
        operand1,
        operand2,
        operation,
      });

      const { result } = response.data;
      setResult(result);

      // Fetch updated resultsArray from cookies
      const updatedResultsArray = (await axios.get('http://localhost:3001/results')).data;
      setResultsArray(updatedResultsArray);
    } catch (error) {
      console.error('Error calculating:', error);
    }
  };

  useEffect(() => {
    // Fetch initial resultsArray from cookies
    const fetchResults = async () => {
      const resultsArray = (await axios.get('http://localhost:3001/results')).data;
      setResultsArray(resultsArray);
    };

    fetchResults();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>

      <div className="container mt-5">
        <div className="row">
          {/* ... Your existing form code ... */}

          {/* Display Result */}
          <div className="col-md-12 mt-3">
            <h4>Result: {result}</h4>
          </div>
        </div>

        {/* Result Table */}
        {resultsArray.length > 0 && (
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>Calculation Results</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Operand 1</th>
                    <th>Operation</th>
                    <th>Operand 2</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {resultsArray.map((calculation, index) => (
                    <tr key={index}>
                      <td>{calculation.operand1}</td>
                      <td>{calculation.operation}</td>
                      <td>{calculation.operand2}</td>
                      <td>{calculation.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
