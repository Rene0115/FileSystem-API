import { createConnection } from 'typeorm';
import { User } from '../Entities/user.entities.js';

const database = () => {
  createConnection({
    type: 'mysql',
    database: 'TEST_API',
    username: 'root',
    password: '',
    logging: true,
    synchronize: false,
    entities: [User]
  });
};
export default database;
