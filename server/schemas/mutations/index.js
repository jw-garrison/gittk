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
      async resolve(parentValue, { username, password }) {
        const newUser = await (new User({ username, password })).save();
        return newUser;
      },
    },
    addOrgnization: {
      type: OrganizationType,
      args: {
        title: { type: GraphQLString },
      },
      async resolve(parentValue, { title }) {
        const newOrg = await (new Organization({ title })).save();
        return newOrg;
      },
    },
    addProject: {
      type: ProjectType,
      args: {
        title: { type: GraphQLString },
      },
      async resolve(parentValue, { title }) {
        const newProject = await (new Project({ title })).save();
        return newProject;
      },
    },
    addWorkflow: {
      type: WorkflowType,
      args: {
        gitCommand: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      async resolve(parentValue, { gitCommand, description }) {
        const newWorkflow = await (new Workflow({ gitCommand, description })).save();
        return newWorkflow;
      },
    },
  },
});

export default Mutations;
