import mysql from 'mysql';

const database = () => {
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TEST_API'
  });
 connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
};
  export default database;