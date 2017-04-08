import API_ROUTER from './api';

export default function (app) {
  app.use('/api', API_ROUTER);
}
