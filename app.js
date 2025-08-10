let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim(); 


    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }


    amigos.push(nombre); 
    input.value = ""; 
    mostrarLista(); 
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

     amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía, agregue al menos un nombre.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").textContent = 
        " El amigo secreto es: " + amigoSecreto;
}