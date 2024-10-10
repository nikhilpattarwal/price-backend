require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT || 3002
const functionRouter = require('./routes/functionrouter'); 
const {productData} = require('./utils/productData')


app.use('/api', functionRouter);
app.get('/scrape', async (req, res) => {
    // const { searchQuery } = req.query; 
    // if (!searchQuery) {
    //     return res.status(400).json({ error: 'Search query is required' });
    // }
    
    try {
        const data = await productData('cartoons');
        res.json(data); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while scraping data',error });
    }
});
app.get('/', (req, res) => {
  res.send('Hello, World!'); 
});


app.listen(port, () => {
  console.log(`Server running at ${port}`); 
});
