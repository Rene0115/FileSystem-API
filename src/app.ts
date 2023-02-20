import express from 'express';
import pino from 'pino';
import middleware from './middlewares/middleware.js';

const app:express.Application = express();

const logger = pino();

middleware(app);

app.listen(4000, (): void => {
  logger.info('listening on port 4000');
});

export default logger;
