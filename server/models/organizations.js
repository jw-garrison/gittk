import mongoose, { Schema } from 'mongoose';

const OrganizationSchema = new Schema({
  orgname: { type: String },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  project: [{
    type: Schema.Types.ObjectId,
    ref: 'project',
  }],
});

mongoose.model('organization', OrganizationSchema);
