import mongoose from 'mongoose';
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} from 'graphql';

import ProjectType from './ProjectType';

const Workflow = mongoose.model('workflow');

const WorkflowType = new GraphQLObjectType({
  name: 'WorkflowType',
  fields: () => ({
    id: { type: GraphQLID },
    gitCommand: { type: GraphQLString },
    description: { type: GraphQLString },
    project: {
      type: ProjectType,
      resolve(parentValue) {
        return Workflow.findProject(parentValue.id);
      },
    },
  }),
});

export default WorkflowType;
