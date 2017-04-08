import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import mongoose from 'mongoose';
import UserType from '../UserType';
import OrganizationType from '../OrganizationType';
import ProjectType from '../ProjectType';
import WorkflowType from '../WorkflowType';

const User = mongoose.model('user');
const Organization = mongoose.model('organization');
const Project = mongoose.model('project');
const Workflow = mongoose.model('workflow');

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { username, password }) {
        return (new User({ username, password })).save();
      },
    },
    addOrgnization: {
      type: OrganizationType,
      args: {
        title: { type: GraphQLString },
      },
      resolve(parentValue, { title }) {
        return (new Organization({ title })).save();
      },
    },
    addProject: {
      type: ProjectType,
      args: {
        title: { type: GraphQLString },
      },
      resolve(parentValue, { title }) {
        return (new Project({ title })).save();
      },
    },
    addWorkflow: {
      type: WorkflowType,
      args: {
        gitCommand: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parentValue, { gitCommand, description }) {
        return (new Workflow({ gitCommand, description })).save();
      },
    },
  },
});

export default Mutations;
