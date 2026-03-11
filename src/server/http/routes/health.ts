import { Router } from 'express';
import { ApiRoutes } from '../../../shared/constants/apiRoutes';

const healthRouter = Router();

healthRouter.get(ApiRoutes.Health, (_req, res) => {
  res.json({ status: 'ok' });
});

export default healthRouter;
