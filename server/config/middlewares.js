import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

export default function (app, express) {
  app.use(compression());
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/static', express.static(path.join(__dirname, '../../public')));
}
