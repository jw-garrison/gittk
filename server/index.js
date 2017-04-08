import 'babel-polyfill';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import API_ROUTER from './routes/api';

const PORT = 8000;
const app = express();

app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, '../../public')));

app.use('/api', API_ROUTER);

app.listen(PORT, (err) => {
  if (err) {
    console.error('Cannot start server: ', err);
  } else {
    console.log(`Listening to port : ${PORT}`);
  }
});
