const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const DataModal = require('./models/Data')
require('dotenv').config();

// const generator = require('express-crud-api-generator')
const generator = require('./generator/index');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors())

const db = process.env.MONGOURL;


//Connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Successful')
        app.enable('trust proxy');
    })
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
//generate crud for the path /data
generator(app, { path: '/data', modal: DataModal })
generator(app, { path: '/antoherPath', modal: DataModal })

app.listen(port, () => console.log('Server started on port 5000'));