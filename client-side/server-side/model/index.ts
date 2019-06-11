const sql = require('../config/mysql.config')

sql.connect()

require('./tables/image')(sql)

export = sql


