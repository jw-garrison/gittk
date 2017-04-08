import mongoose from 'mongoose';
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} from 'graphql';

import UserType from './UserType';
import ProjectType from './ProjectType';

const Organization = mongoose.model('organization');

const OrganizationType = new GraphQLObjectType({
  name: 'OrganizationType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    members: {
      type: new GraphQLList(UserType),
      resolve(parentValue) {
        return Organization.findMembers(parentValue.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue) {
        return Organization.findProjects(parentValue.id);
      },
    },
  }),
});

export default OrganizationType;
