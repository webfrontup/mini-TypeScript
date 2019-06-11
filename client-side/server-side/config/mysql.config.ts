import mysql = require('mysql');

const devConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'agency_dev',
    port: 33061,
}

const prodConfig = {
    host: 'localhost',
    database: 'ts',
    port: 33061,
}

const sql = mysql.createConnection(devConfig)

module.exports = process.env.NODE_ENV === 'production' ? sql : sql
