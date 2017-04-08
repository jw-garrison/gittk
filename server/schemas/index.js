import { GraphQLSchema } from 'graphql';
import RootQueryType from './RootQuery';
import RootMutationType from './mutations';

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
