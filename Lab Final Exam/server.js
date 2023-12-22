const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());

app.post('/calculate', (req, res) => {
  const { operand1, operand2, operation } = req.body;
  let result;

  switch (operation) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = 'Invalid operation';
  }

  // Store result in cookies
  let resultsArray = req.cookies.resultsArray || [];
  resultsArray.push({ operand1, operand2, operation, result });
  res.cookie('resultsArray', resultsArray);

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
