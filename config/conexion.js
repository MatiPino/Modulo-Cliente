const mysql2 = require('mysql2');
const conexion = mysql2.createConnection({
    host: '3.237.1.251',
    user: 'admin',
    password: 'password',
    port:3306,
    database: `Prueba_Integracion`
});

conexion.connect((err) => {
    if (err) {
        console.log('se a detectado un error');
    }
    else {
        console.log('la base de datos se a conectado correctamente');
    }
});

module.exports = conexion;