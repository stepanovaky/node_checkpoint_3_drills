const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Express server is listening on port 8000');
});

app.get('/', (req, res) => {
    res.send('hello express!');
});

app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    if(!a) {
        return res.status(400).send('please provide a');
    }

    if(!b) { 
        return res.status(400).send('please provde b');
    }

    const sum = parseInt(a) + parseInt(b);
    const response = `${sum}`;

    res.send(response);

})