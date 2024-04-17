const axios = require("axios");
const createCard = require("./createCard");

const getDataAndCreateCard = async () => {
    try {
        const response = await axios.get("https://students-api.up.railway.app/movies");
        createCard(response.data); // Llama a createCard con los datos de la API
    } catch (error) {
        console.error("Error al obtener los datos de películas:", error);
    }
};


getDataAndCreateCard();