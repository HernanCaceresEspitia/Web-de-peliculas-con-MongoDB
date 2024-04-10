const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
];

//? Objetos desde el HTML

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
        imgContainer.classList.add("imgContainer");
        imgsMovie.classList.add("imgEditor")
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


    })
};

createCard(tempData);
