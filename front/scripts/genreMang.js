document.addEventListener("DOMContentLoaded", function() {
    const movies = ["Acción", "Aventura", "Fanstasía", "Drama", "Sci-Fi", "Comedia", "Terror", "Romance"];
    const selectmovies = document.querySelector('select[name="movies"]');
    const moviesContainer = document.getElementById('moviesContainer');
    const moviesAgregados = new Set(); // Usamos un Set para llevar un registro de los movies agregados
    const moviesArray = []; // Array para almacenar los valores de los botones agregados

    // Generar las opciones del select a partir del array
    movies.forEach(function(invitado) {
        const option = document.createElement("option");
        option.value = invitado;
        option.textContent = invitado;
        selectmovies.appendChild(option);
    });

    // Agregar evento click al botón "Añadir"
    document.querySelector('input[type="button"]').addEventListener("click", function() {
        // Obtener el valor seleccionado del select
        const selectedValue = selectmovies.value;

        // Si se ha seleccionado un invitado y no está en la lista de movies agregados
        if (selectedValue !== "" && !moviesAgregados.has(selectedValue)) {
            // Crear un botón para el invitado
            const invitadoButton = document.createElement("button");
            invitadoButton.textContent = selectedValue;
            invitadoButton.classList.add("buttonAdd");

            // Agregar evento click para eliminar el invitado
            invitadoButton.addEventListener("click", function() {
                // Eliminar el botón al hacer clic en él
                moviesContainer.removeChild(invitadoButton);
                // También eliminamos el invitado del Set
                moviesAgregados.delete(selectedValue);
                // Eliminamos el valor del botón del array
                const index = moviesArray.indexOf(selectedValue);
                if (index !== -1) {
                    moviesArray.splice(index, 1);
                }
            });

            // Agregar el botón al contenedor de movies
            moviesContainer.appendChild(invitadoButton);

            // Agregar el invitado al Set de movies agregados
            moviesAgregados.add(selectedValue);

            // Agregar el valor del botón al array
            moviesArray.push(selectedValue);

            // Limpiar el valor seleccionado del select
            selectmovies.value = "";
        } else {
            // Mostrar una alerta si se intenta agregar un invitado duplicado
            alert("¡Este género ya ha sido agregado!");
        }
    });

    // Función para obtener el array de películas agregadas
    function getMoviesArray() {
        console.log(moviesArray);
        return moviesArray;
    }

    // Ahora puedes llamar a la función getMoviesArray() cuando necesites acceder al array de películas agregadas.
});