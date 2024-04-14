const createCard = require("/scripts/createCard")

const getDataAndCreateCard = () => {
    $.get("https://students-api.up.railway.app/movies", (data, status) => {
        createCard(data); // Llama a createCard con los datos de la API
    });
};

getDataAndCreateCard();
