import mongoose from 'mongoose';
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} from 'graphql';

import OrganizationType from './OrganizationType';
import ProjectType from './ProjectType';

const User = mongoose.model('user');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    organizations: {
      type: new GraphQLList(OrganizationType),
      async resolve(parentValue) {
        const orgs = await User.findOrgs(parentValue.id);
        console.log(orgs);
        return orgs;
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue) {
        return User.findProjects(parentValue.id);
      },
    },
  }),
});

export default UserType;
