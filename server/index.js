import 'babel-polyfill';
import express from 'express';
import Middleware from './config/middlewares';
import Router from './routes';
import PORT from './constants';

const app = express();

Middleware(app, express);
Router(app);

app.listen(PORT, (err) => {
  if (err) {
    console.error('Cannot start server: ', err);
  } else {
    console.log(`Listening to port : ${PORT.PORT}`);
  }
});
