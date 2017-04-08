import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  projectname: { type: String },
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

mongoose.model('project', ProjectSchema);
