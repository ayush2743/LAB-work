const express = require('express');
const app = express();
const port = 5002;

app.get('/property', (req, res) => {
    console.log('Property service received a request');
    res.send('Hello property service');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Property service listening at http://localhost:${port}`);
});
