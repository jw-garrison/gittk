import mongoose, { Schema } from 'mongoose';

const WorkflowSchema = new Schema({
  workflowname: { type: String },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'project',
  },
});

mongoose.model('workflow', WorkflowSchema);
