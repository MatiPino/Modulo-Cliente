require('./config/conexion');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config;
const port = (process.env.PORT || 3000);


//express
const app = express();

//admitir
app.use(express.json())

//configuracion puerto
app.set('port',port);

//rutas
app.use('/api',require('./rutas'))


// inicar express
app.listen(app.get('port'),(error)=> {
    if (error) {
        console.log('error al iniciar el servidor: '+error);
    }else {
        console.log('servidor iniciado en el puerto: '+port);
    }
})