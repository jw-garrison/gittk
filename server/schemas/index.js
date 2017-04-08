import { GraphQLSchema } from 'graphql';
import RootQueryType from './RootQuery';
import Mutations from './mutations';

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutations,
});
