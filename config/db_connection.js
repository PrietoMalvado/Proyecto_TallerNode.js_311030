const mysql = require('mysql'); //import modulo mysql
const util = require('util'); //peticiones asincronas
require('dotenv').config(); //cargamos las variables de entorno desde el archivo .env

// Configuración de la conexión a la base de datos

const pool = mysql.createPool({
    connectionLimit: 10,
    queueLimit: 0,
    host:process.env.DB_HOST || 'localhost',
    user:process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'empleados_db'
});

pool.query = util.promisify(pool.query); //promisify para hacer las peticiones asincronas
module.exports = pool;