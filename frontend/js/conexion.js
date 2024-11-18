let mysql = require("myslq");

let conexion = mysql.createConnetion(
    {
        host:"localhost",
        database:"tienda",
        user:"root",
        password:"root"
    }
);
conexion.connect(function(error){
    if(err){
        throw err;
    }else {
        console.log("conexion bien ");
    }
});