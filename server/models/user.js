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

UserSchema.statics.findOrgs = function findOrgs(id) {
  return this.findById(id)
    .populate('organizations')
    .then(user => user.organizations);
};

UserSchema.statics.findProjects = function findProjects(id) {
  return this.findById(id)
    .populate('project')
    .then(user => user.project);
};

UserSchema.statics.addOrgnization = function addOrgnization(id, title) {
  const Organization = mongoose.model('organization');

  return this.findById(id)
    .then((user) => {
      const newOrg = new Organization({ title });
      user.organizations.push(newOrg);
      return Promise.all([user.save(), newOrg.save()])
        .then(([user, newOrg]) => newOrg);
    });
};

mongoose.model('user', UserSchema);
