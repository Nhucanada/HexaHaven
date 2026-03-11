import { Router } from 'express';
import healthRouter from './routes/health';
import roomsRouter from './routes/rooms';

const rootRouter = Router();
rootRouter.use(healthRouter);
rootRouter.use(roomsRouter);

export default rootRouter;
