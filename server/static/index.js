import { PUBLIC_PATH } from '../constants';

export default (app, express) => app.use('/static', express.static(PUBLIC_PATH));
