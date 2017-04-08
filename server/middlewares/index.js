import Compression from './compression';
import Helmet from './helmet';
import Morgan from './morgan';
import BodyParser from './bodyparser';
import GraphQL from './graphql';

export default (app) => {
  Compression(app);
  Helmet(app);
  Morgan(app);
  BodyParser(app);
  GraphQL(app);
};
