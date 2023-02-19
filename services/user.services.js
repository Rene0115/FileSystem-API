/* eslint-disable class-methods-use-this */
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'TEST_API'
});

class UserServices {
  async create() {
    const sql = connection.query('CREATE TABLE Users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))');
    return sql;
  }
}

export default new UserServices();
