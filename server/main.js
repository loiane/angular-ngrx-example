const bodyParser = require('body-parser');
const express = require('express');
const logger = require('winston');
const morgan = require('morgan');

const app = express();

app.set('host', 'localhost');
app.set('port', 3001);

app.use(morgan('dev'));

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./router'));

app.listen(app.get('port'), app.get('host'), error => {
  if (error) {
    logger.error(error);
  }
  else {
    logger.info(`Server listening @ ${app.get('host')}:${app.get('port')}`);
  }
});
