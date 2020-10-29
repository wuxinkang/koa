const mysql = require("mysql");
const config = require("../config");

const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
});

class Mysql {
  query() {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          console.log(err);
        } else {
          console.log(err, connection);
          pool.query('SELECT * from `table`', function (error, results, fields) {
            if (error) {
              throw error;
            }
            resolve(results);
            // console.log('The solution is: ', results[0].solution);
          });
        }
      });
    });
  }
}

module.exports = new Mysql();
