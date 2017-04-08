import mongoose from 'mongoose';
import { MONGO_URL } from '../constants';

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab'))
  .on('error', error => console.error('Error connecting to MongoLab', error));
