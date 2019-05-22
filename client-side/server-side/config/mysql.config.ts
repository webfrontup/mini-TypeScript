const devConfig = {
    host: 'localhost',
    database: 'agency_dev',
    name: 'root',
    password: 'root',
    port: 33061,
    charset: 'utf8',
}

const prodConfig = {
    host: 'localhost',
    database: 'ts',
    port: 33061,
}

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
