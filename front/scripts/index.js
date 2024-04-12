
const cards = document.getElementById("cards");

const createCard = (arrayMovie = []) => {
    const arrayCardMovie = arrayMovie.map((movie) => {
        
        //? Elementos básicos de la tarjeta

        const cardMovie = document.createElement("div");
        const nameMovie = document.createElement("h5");
        const imgsMovie = document.createElement("img");
        const buttonDel = document.createElement("button");

        //? Contenedores para estilos

        const div13 = document.createElement("div");
        const singleTitle = document.createElement("div");
        const imgContainer = document.createElement("div");
        const dataMovie = document.createElement("div");
        const infoSection1 = document.createElement("div")
        const preTitle1 = document.createElement("div");
        const subTitle1 = document.createElement("div");
        const infoSection2 = document.createElement("div")
        const preTitle2 = document.createElement("div");
        const subTitle2 = document.createElement("div");
        const infoSection3 = document.createElement("div")
        const preTitle3 = document.createElement("div");
        const subTitle3 = document.createElement("div");
        const infoSection4 = document.createElement("div")
        const preTitle4 = document.createElement("div");
        const subTitle4 = document.createElement("div");

        //? Añadir clases a los elementos

        div13.classList.add("div13");
        singleTitle.classList.add("singleTitle");
        singleTitle.setAttribute("id", "nombrePeli");
        imgContainer.classList.add("imgContainer");
        imgContainer.classList.add("card-img-top");
        imgsMovie.classList.add("imgEditor");
        dataMovie.classList.add("dataMovie");
        infoSection1.classList.add("infoSection");
        preTitle1.classList.add("preTitle");
        subTitle1.classList.add("subTitle");
        infoSection2.classList.add("infoSection");
        preTitle2.classList.add("preTitle");
        subTitle2.classList.add("subTitle");
        infoSection3.classList.add("infoSection");
        preTitle3.classList.add("preTitle");
        subTitle3.classList.add("subTitle");
        infoSection4.classList.add("infoSection");
        preTitle4.classList.add("preTitle");
        subTitle4.classList.add("subTitle");
        

        //? Asignacion de los valores a los elementos del documento

        buttonDel.innerText = "X";
        //*Agregar la asignacion de eliminación
        nameMovie.innerText = movie.title;
        imgsMovie.src = movie.poster;
        preTitle1.innerText = "Director: ";
        preTitle2.innerText = "Año: ";
        preTitle3.innerText = "Duración: ";
        preTitle4.innerText = "Género: ";

        subTitle1.innerText = movie.director;
        subTitle2.innerText = movie.year;
        subTitle3.innerText = movie.duration;
        subTitle4.innerText = movie.genre;
        
        
        //? Append para ubicar los elementos



        infoSection1.append(preTitle1, subTitle1)
        infoSection2.append(preTitle2, subTitle2);
        infoSection3.append(preTitle3, subTitle3);
        infoSection4.append(preTitle4, subTitle4);
        dataMovie.append(infoSection1, infoSection2, infoSection3, infoSection4);
        imgContainer.append(imgsMovie);
        singleTitle.append(nameMovie);
        div13.append(singleTitle, imgContainer, dataMovie);
        cards.append(div13);
        

        div13.addEventListener("mouseover", () => {
            const tituloPelicula = movie.title;
            document.getElementById("tituloPelicula").innerText = tituloPelicula;
        });

    })
};


const getDataAndCreateCard = () => {
    $.get("https://students-api.up.railway.app/movies", (data, status) => {
        createCard(data); // Llama a createCard con los datos de la API
    });
};



getDataAndCreateCard();

