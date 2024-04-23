require("dotenv").config();

const mongoose = require("mongoose");

//TODo Hacer la conexión a la base de datos en una FUNCION

//TODO Exportar la función

const configDB = async () => {
    //TODO Hacer la conexión a la BDD con la URL que nos da MongoDB
    //* URL
    console.log(process.env.MONGO_URI);
};

module.exports = configDB;