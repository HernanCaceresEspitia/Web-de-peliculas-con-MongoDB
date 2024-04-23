const app = require("./src/services/server");
const configDB = require("./src/config/configDB");

configDB().then((res) => {
    app.listen(3001, () => {
        console.log("Servidor escuchando en el puerto 3001");
    });
})
.catch((err) => {
    console.log("Error al conectar con la base de datos");
})