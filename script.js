function cambiar_texto(texto) {
    if (texto.innerText == "Iniciar sesión") {
        texto.innerText = "Cerrar sesión"
    } else {
        texto.innerText = "Iniciar sesión"
    }

}

function eliminar(elemento){
    elemento.remove(elemento);

}

function me_gusta_gato(elemento) {
    alert(document.getElementById("raza_gato").innerText+" was liked")
    var span = document.getElementById("gato_span");

    var valor = parseInt(span.innerText)
    valor ++;

    span.innerText = valor
}

function me_gusta_perro(elemento) {
    alert(document.getElementById("raza_perro").innerText+" was liked")
    var span = document.getElementById("perro_span");

    var valor = parseInt(span.innerText)
    valor ++;

    span.innerText = valor
}