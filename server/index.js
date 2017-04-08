import 'babel-polyfill';
import express from 'express';
import Middleware from './middlewares';
import Static from './static';
import Router from './routes';
import { PORT } from './constants';

const app = express();

Middleware(app);
Static(app, express);
Router(app);

app.listen(PORT, (err) => {
  if (err) {
    console.error('Cannot start server: ', err);
  } else {
    console.log(`Listening to port : ${PORT}`);
  }
});
