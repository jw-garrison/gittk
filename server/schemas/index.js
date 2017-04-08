import { GraphQLSchema } from 'graphql';
import RootQueryType from './RootQuery';

export default new GraphQLSchema({
  query: RootQueryType,
});
