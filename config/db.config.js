/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-mutable-exports */
import mysql from 'mysql';
import logger from '../app.js';

const database = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TEST_API'
  });
  connection.connect((err) => {
    if (err) throw err;
    logger.info('Connected to Database');
  });
};
export default database;
