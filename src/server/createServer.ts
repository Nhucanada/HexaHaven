import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import rootRouter from './http/router';
import { createSocketServer } from './realtime/socketServer';
import { registerSocketHandlers } from './realtime/registerSocketHandlers';

export function buildServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(rootRouter);

  const httpServer = createServer(app);
  const io = createSocketServer(httpServer);
  registerSocketHandlers(io);

  return { app, httpServer, io };
}
