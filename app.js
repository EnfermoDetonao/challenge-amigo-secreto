// Arreglo principal donde se almacenan los nombres ingresados
const amigos = [];
/**
 * Agrega un nuevo nombre al arreglo de amigos.
 * Valida que el campo no esté vacío y que el nombre no esté repetido.
 */
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
/*----------------------------------------------------------------------*/
    // Verifica si el nombre ya fue ingresado (sin distinguir mayúsculas/minúsculas)
    const nombreExiste = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
    if (nombreExiste) {
        alert(`El nombre "${nombre}" ya fue ingresado.`);
        return;
    }

    amigos.push(nombre);
    mostrarListaDeAmigos();
    input.value = "";
}
/*----------------------------------------------------------------------*/
/**
 * Muestra en pantalla la lista actual de amigos.
 * Limpia el contenido previo para evitar duplicados visuales.
 */
function mostrarListaDeAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
/*----------------------------------------------------------------------*/
/**
 * Realiza el sorteo de un amigo secreto de forma aleatoria.
 * Muestra el resultado en el área designada.
 */
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}