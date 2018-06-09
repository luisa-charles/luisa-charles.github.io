const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-unique-validator'));
mongoose.Promise = require('bluebird');
const router = require('./config/router');
const errorHandler = require('./lib/errorHandler');

const { dbURI, port } = require('./config/environment');

const app = express();
app.use(express.static(`${__dirname}/public`));

mongoose.connect(dbURI);
app.use(bodyParser.json());

app.use('/api', router);

app.use(errorHandler);

app.route('/*').get(function (req, res) {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => console.log(`Live on port ${port}`));

module.exports = app;
