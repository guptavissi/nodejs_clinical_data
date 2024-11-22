const express = require('express');

const routes = require('./routes/route.js');

const PORT = process.env.PORT || 8000;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '5mb' }));

// let value = 5;

// app.get('/test1', (req, res) => {
//     setTimeout(() => {
//         return res.send({ value: value })
//     }, 5000);
// })
// app.get('/test2', (req, res) => {
//     value = 10;
//     return res.send({ value: value })
// })

app.use('/api', routes);


const server = app.listen(PORT, function () {
    console.log('Server Listening on port:', PORT);
});
server.timeout = 0;
