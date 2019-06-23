const express = require('express')

const iets = require('./api/iets')

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //My frontend APP domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const port = process.env.port || 5000;

//template api path
app.use('/api/iets', iets)

app.listen(port, ()=>{ console.log(`Server started on port ${port}`)})