import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  organizations: [{
    type: Schema.Types.ObjectId,
    ref: 'organization',
  }],
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'project',
  }],
});

UserSchema.statics.findOrgs = id => this.findById(id)
  .populate('organization')
  .then(user => user.organization);

UserSchema.statics.findProjects = id => this.findById(id)
  .populate('project')
  .then(user => user.project);

mongoose.model('user', UserSchema);
