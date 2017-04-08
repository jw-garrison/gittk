import mongoose, { Schema } from 'mongoose';

const OrganizationSchema = new Schema({
  title: { type: String },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'project',
  }],
});

OrganizationSchema.statics.findMembers = id => this.findById(id)
  .populate('user')
  .then(organization => organization.user);

OrganizationSchema.statics.findProjects = id => this.findById(id)
  .populate('project')
  .then(organization => organization.project);

mongoose.model('organization', OrganizationSchema);
