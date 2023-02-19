/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-mutable-exports */
import { createConnection } from 'typeorm';
import logger from '../app.js';

const database = () => {
  createConnection({
    type: 'mysql',
    database: 'TEST_API',
    username: 'root',
    password: '',
    logging: true,
    synchronize: true
  });
};
export default database;
