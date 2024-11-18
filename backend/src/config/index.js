const app = require('./app'); // Importa la configuración de la aplicación (Express u otra)
const database = require('./database'); // Importa la configuración de la base de datos

const main = () => {
    database.connect((err) => {
        if (err) throw err;
        console.log('Base de datos conectada');
    });

    app.listen(3000, () => {
        console.log('Servidor escuchando puerto 3000');
    });
};

main();