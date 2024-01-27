// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'viaduct.proxy.rlwy.net',
  user: 'root',
  password: 'acbADF446Db2Gdfedf3Eb3fEAc3d1Aac',
  database: 'formulario_fc',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos: ', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = db;
