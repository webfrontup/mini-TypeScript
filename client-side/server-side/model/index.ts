import mysql = require('mysql');
const mysqlConfig = require("../config/mysql.config");

const sql = mysql.createConnection(mysqlConfig);

sql.connect()

require('./tables/image')(sql)



export = sql


