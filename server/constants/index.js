import path from 'path';
import { config } from 'dotenv';

config();

export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;

export const MONGO_URL = `mongodb://${DB_USER}:${DB_PASS}@ds157040.mlab.com:57040/gittk`;

export const PORT = 8000;
export const PUBLIC_PATH = path.join(__dirname, '../../../public');
