const app = require('express').Router();
const path = require('path');


    app.get('/stats', (req, res)=> {
        res.sendFile(path.join(__dir,'../public/stats.html'))
    });

    app.get('/exercise', (req, res)=> {
        res.sendFile(path.join(__dir,'../public/exercize.html'))
    });

    app.get('*', (req, res)=> {
        res.sendFile(path.join(__dir,'../public/index.html'))
    });

    module.exports = app;