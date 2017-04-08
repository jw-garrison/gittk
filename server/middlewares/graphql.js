import expressGraphQL from 'express-graphql';

export default app => app.use('/graphql', expressGraphQL({
  schema: null,
  graphiql: true,
}));
