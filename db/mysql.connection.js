import mysql from 'mysql2'
import { config } from '../db/mysql.config.js'

export const connection = mysql.createPool(config)


/*
connection.query('DROP TABLE productos')

connection.query(`CREATE TABLE IF NOT EXISTS productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price FLOAT NOT NULL,
        stock INT NOT NULL,
        image TEXT NOT NULL
    );`)
*/

