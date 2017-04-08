import Compression from './compression';
import Helmet from './helmet';
import Morgan from './morgan';
import BodyParser from './bodyparser';

export default (app) => {
  Compression(app);
  Helmet(app);
  Morgan(app);
  BodyParser(app);
};
