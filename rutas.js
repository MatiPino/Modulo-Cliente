const rutas = require('express').Router()
const conexion = require('./config/conexion')


//asignamos todas las rutas a utilizar
// primer metodo, get productos estoy consiguiendo todos los productos que se encuentran en la tabla de productos
rutas.get('/',(entrada, respuesta) => {
    let sql = `select * from PRODUCTO`
    conexion.query(sql,(err, results) => {
        if (err) throw err; 
        else{
            respuesta.json(results)
        }
    })

});


// get un producto , estoy consiguiendo el parametro d eentrada en este caso es el id del producto
rutas.get('/:id',(entrada, respuesta) => {
    const {id} = entrada.params
    let sql = `select * from PRODUCTO where idProducto = "${id}"`
    conexion.query(sql,(error, filas, fields) => {
        if (error) throw error; 
        else{
            respuesta.json(filas)
        }
    })
});

// Agregar productos entrada: parametro de entrada
rutas.post('/',(entrada, respuesta) => {
    const{Nom_prod, Precio, Imagen, Categoria, Restaurante} = entrada.body

    let sql = `insert into PRODUCTO(Nom_prod, Precio, Imagen, Categoria, Restaurante) values('${Nom_prod}','${Precio}','${Imagen}','${Categoria}','${Restaurante}');`
    conexion.query(sql, (error, filas, archivos) => {
        if (error) throw error 
        else{
            respuesta.json({status: 'Producto agregado'})     
        }
    })
});

// Eliminar producto
rutas.delete('/:id',(entrada, respuesta) => {
    const{id} = entrada.params

    let sql = `delete from PRODUCTO where idProducto = '${id}'`
    conexion.query(sql,(error, filas, archivos) => {
        if (error) throw error 
        else{
            respuesta.json({status: 'Producto eliminado'})     
        }
    })
})

//Modicar producto
rutas.put('/:id', (entrada, respuesta) => {
    const{id} = entrada.params
    const{Nom_prod, Precio, Imagen, Categoria, Restaurante} = entrada.body

    let sql = `update PRODUCTO set
                Nom_prod ='${Nom_prod}',
                Precio ='${Precio}',
                Imagen ='${Imagen}',
                Categoria ='${Categoria}',
                Restaurante ='${Restaurante}'
                where idProducto = ${id}`

                conexion.query(sql, (error, filas, archivos) => {
                    if (error) throw error 
                    else{
                        respuesta.json({status: 'Producto modificado'})     
                    }
                })                
})

// ----------------------------------

module.exports = rutas;