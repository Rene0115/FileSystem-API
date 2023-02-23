import { DataSource } from 'typeorm';
import logger from '../app';
import { User } from '../Entities/user.entities';
import dotenv from 'dotenv';

dotenv.config();

const database = async () => {
 const dataSource = new DataSource({
    type: 'mysql',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
    synchronize: false,
    entities: [User]
  });
  await dataSource.initialize()
  logger.info('Database Connected')
};
export default database;
