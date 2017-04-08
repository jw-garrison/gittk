import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  title: { type: String },
  organization: {
    type: Schema.Types.ObjectId,
    ref: 'organization',
  },
  contributors: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  workflow: [{
    type: Schema.Types.ObjectId,
    ref: 'workflow',
  }],
});

ProjectSchema.statics.findContributors = id => this.findById(id)
  .populate('user')
  .then(project => project.user);

ProjectSchema.statics.findOrg = id => this.findById(id)
  .populate('organization')
  .then(project => project.organization);

ProjectSchema.statics.findWorkflow = id => this.findById(id)
  .populate('workflow')
  .then(project => project.workflow);


mongoose.model('project', ProjectSchema);
