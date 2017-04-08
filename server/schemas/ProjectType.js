import mongoose from 'mongoose';
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} from 'graphql';

import UserType from './UserType';
import OrganizationType from './OrganizationType';
import WorkflowType from './WorkflowType';

const Project = mongoose.model('project');

const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    contributors: {
      type: new GraphQLList(UserType),
      resolve(parentValue) {
        return Project.findContributors(parentValue.id);
      },
    },
    organization: {
      type: OrganizationType,
      resolve(parentValue) {
        return Project.findOrg(parentValue.id);
      },
    },
    workflow: {
      type: WorkflowType,
      resolve(parentValue) {
        return Project.findWorkflow(parentValue.id);
      },
    },
  }),
});

export default ProjectType;
