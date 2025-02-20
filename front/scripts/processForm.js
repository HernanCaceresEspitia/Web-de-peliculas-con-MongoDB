// Define una función para capturar los valores del formulario y procesarlos
function procesarFormulario() {
    // Obtiene los valores de los campos del formulario
    const titulo = document.getElementById("tituloPelicula").value.trim();
    const year = document.getElementById("yearPelicula").value.trim();
    const director = document.getElementById("directorPelicula").value.trim();
    const duracion = document.getElementById("duracionPelicula").value.trim();
    const generos = Array.from(document.getElementById("moviesContainer").querySelectorAll("button")).map(button => button.textContent.trim());
    const poster = document.getElementById("posterPelicula").value.trim();

    // Verifica si algún campo está vacío
    if (titulo === "" || year === "" || director === "" || duracion === "" || generos.length === 0 || poster === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return; // Detiene el procesamiento del formulario si algún campo está vacío
    }

    // Crea un objeto con los valores capturados
    const pelicula = {
        title: titulo,
        year: year,
        director: director,
        duration: duracion,
        genre: generos,
        poster: poster
    };

    async function axiosPostMovie(pelicula){
        axios.post("http://localhost:3001/movies", pelicula)
        .then(
        response => {console.log(response)}
        )
        .catch(
        error => {console.error(error)}
        ); 
    };

    axiosPostMovie(pelicula);

    console.log(pelicula);
    alert("¡Película subida exitosamente!");
    resetForm();
    
}

// Agrega un event listener al botón "Subir película" para llamar a la función de procesamiento del formulario
document.getElementById("uploadBtn").addEventListener("click", procesarFormulario);

function resetForm() {
  const form = document.getElementById("movieForm");
  form.reset();
}

