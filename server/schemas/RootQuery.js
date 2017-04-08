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
      async resolve(parentValue, { id }) {
        const user = await User.findById(id);
        return user;
      },
    },
    organization: {
      type: OrganizationType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parentValue, { id }) {
        const org = await Organization.findById(id);
        return org;
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parentValue, { id }) {
        const project = await Project.findById(id);
        return project;
      },
    },
    workflow: {
      type: WorkflowType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parentValue, { id }) {
        const workflow = await Workflow.findById(id);
        return workflow;
      },
    },
  }),
});

export default RootQuery;
