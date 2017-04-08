import mongoose from 'mongoose';
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import UserType from './UserType';
import OrganizationType from './OrganizationType';
import ProjectType from './ProjectType';
import WorkflowType from './WorkflowType';

const User = mongoose.model('user');
const Organization = mongoose.model('organization');
const Project = mongoose.model('project');
const Workflow = mongoose.model('workflow');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      },
    },
    organization: {
      type: OrganizationType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Organization.findById(id);
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Project.findById(id);
      },
    },
    workflow: {
      type: WorkflowType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Workflow.findById(id);
      },
    },
  }),
});

export default RootQuery;
