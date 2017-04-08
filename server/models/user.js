import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  organization: [{
    type: Schema.Types.ObjectId,
    ref: 'organization',
  }],
  project: [{
    type: Schema.Types.ObjectId,
    ref: 'project',
  }],
});

mongoose.model('user', UserSchema);
