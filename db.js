import mysql from 'mysql2'
// import { Pool } from 'mysql2/typings/mysql/lib/Pool'

const pool =  mysql.createPool({
    host: '127.0.0.1',
    user: "root",
    password: "",
    database: "projek_mbd"
}).promise();

export default pool;