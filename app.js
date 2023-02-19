/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import express from 'express';
import pino from 'pino';
import middleware from './middlewares/middleware.js';

const app = express();

const logger = pino();

middleware(app);

app.listen(3500, () => {
  logger.info('listening on port 3500');
});

export default logger;
