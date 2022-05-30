const express = require('express');
const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server on PORT ${PORT}`)
})