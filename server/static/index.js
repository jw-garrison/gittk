import { PUBLIC_PATH } from '../constants';

export default (app, { static: S }) => app.use(S(PUBLIC_PATH));
