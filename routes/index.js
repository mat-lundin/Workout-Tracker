const app = require('express').Router();
const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require('./apiroutes/apiRoutes');

app.use('/api', apiRoutes);

app.use("/", htmlRoutes);


module.exports = app;
