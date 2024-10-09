require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT || 3002
const functionRouter = require('./routes/functionrouter'); 


app.use('/api', functionRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!'); 
});


app.listen(port, () => {
  console.log(`Server running at ${port}`); 
});
