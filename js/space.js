const inputBuscar = document.getElementById("inputBuscar");
const btnBuscar = document.getElementById("btnBuscar");
const contenedor = document.getElementById("contenedor");



// Función para mostrar los resultados en el contenedor
function showData(data) {
    // Limpia el contenido anterior en el contenedor
    contenedor.innerHTML = "";
    // A través de un forEach agregamos el contenido encontrado en el html
    data.collection.items.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = item.links[0].href;
        img.classList.add("card-img-top");
        div.appendChild(img);

        const body = document.createElement("div");
        body.classList.add("card-body");

        const title = document.createElement("h2");
        title.textContent = item.data[0].title;
        title.classList.add("card-title");
        div.appendChild(title);

        const description = document.createElement("p");
        description.textContent = item.data[0].description;
        description.classList.add("card-text");
        div.appendChild(description);

        const pie = document.createElement("div");
        pie.classList.add("card-footer");

        const date = document.createElement("p");
        date.textContent = `Fecha de creación: ${item.data[0].date_created}`;
        date.classList.add("text-body-secondary");
        div.appendChild(date);
        contenedor.appendChild(div);

    });
}
contenedor.innerHTML = "No se encontraron resultados.";

// Manejador de eventos para el botón de búsqueda.
btnBuscar.addEventListener("click", function () {
    // Obtiene el valor ingresado por el usuario.
    const busqueda = inputBuscar.value;

    // Realiza la solicitud a la API de la NASA y llama a la función showData.
    fetch(`https://images-api.nasa.gov/search?q=${busqueda}`)
        .then(response => response.json())
        .then(data => showData(data))
});
