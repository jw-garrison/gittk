import expressGraphQL from 'express-graphql';
import schema from '../schemas';

export default app => app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));
