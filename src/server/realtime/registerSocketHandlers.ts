import type { Server } from 'socket.io';
import { SocketEvents } from '../../shared/constants/socketEvents';
import { logger } from '../utils/logger';

export function registerSocketHandlers(io: Server): void {
  io.on(SocketEvents.Connection, (socket) => {
    logger.info(`Client connected: ${socket.id}`);
    socket.on(SocketEvents.Disconnect, () => {
      logger.info(`Client disconnected: ${socket.id}`);
    });
  });
}
