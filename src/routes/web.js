import express from 'express';
import homeController from '../controllers/homeController';
const router = express.Router();


const initWebRoutes = (app) => {
  router.get('/',homeController.handleHelloWorld);
  router.get('/user',homeController.handleUserpage);
  router.post('/user/create-user',homeController.handleCreatenewUser);
  return app.use('/', router);
};

export default initWebRoutes;