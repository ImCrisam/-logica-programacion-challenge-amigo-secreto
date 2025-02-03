
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    listaAmigos.push(nombre);
    mostrarListaAmigos();
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
