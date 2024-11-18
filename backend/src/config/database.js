const mysql2 = require('mysql2');
//db
const database = mysql2.createConnection({
    host: 'localhost',    // Dirección del servidor
    user: 'root',         // Usuario de la base de datos
    password: 'tato123',    // Contraseña del usuario
    database: 'tienda', // Nombre de la base de datos a utilizar
});
module.exports=database