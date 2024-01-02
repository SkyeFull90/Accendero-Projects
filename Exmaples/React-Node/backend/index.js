const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', (_req, res) => {
    res.send('Hello World');
});

app.get('/api/users', (_req, res) => {    
    res.send([{
        id: 1,
        name: 'John',
        age: 22
    },
    {
        id: 2,
        name: 'Jane',
        age: 23
    }
    ]);
});

module.exports = app;