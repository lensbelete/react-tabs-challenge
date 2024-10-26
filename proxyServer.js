const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const PORT = 8080;

app.use(cors());

app.get('/api/:num/short', async (req, res) => {
  try {
    const response = await axios.get(`https://loripsum.net/api/${req.params.num}/short`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
