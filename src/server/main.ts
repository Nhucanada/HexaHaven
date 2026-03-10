import { buildServer } from './createServer';
import { ServerEnv } from './config/env';
import { logger } from './utils/logger';

const { httpServer } = buildServer();

httpServer.listen(ServerEnv.port, () => {
  logger.info(`Server listening on port ${ServerEnv.port}`);
});
