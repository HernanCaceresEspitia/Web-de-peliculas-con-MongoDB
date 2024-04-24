require("dotenv").config();
const mongoose = require("mongoose");

//* Hacer la conexión a la base de datos en una FUNCION

const configDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(process.env.MONGO_URI);
};

//* Exportar la función

module.exports = configDB;