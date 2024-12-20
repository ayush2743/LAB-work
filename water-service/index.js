const express = require('express');
const app = express();
const port = 5001;

app.get('/water', (req, res) => {
    console.log('Water service received a request');
    res.send('Hello water service');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Water service listening at http://localhost:${port}`);
});