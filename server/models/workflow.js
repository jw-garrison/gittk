import mongoose, { Schema } from 'mongoose';

const WorkflowSchema = new Schema({
  gitCommand: { type: String },
  description: { type: String },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'project',
  },
});

WorkflowSchema.statics.findProject = id => this.findById(id)
  .populate('project')
  .then(workflow => workflow.project);


mongoose.model('workflow', WorkflowSchema);
