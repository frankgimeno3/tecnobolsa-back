const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tecnobolsa',
    password: 'mongol0',
    port: 5432,
});

module.exports = pool;