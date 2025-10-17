
// Función principal que toma los valores de las cajas de texto
function saludar() {
  // Obtiene los valores de los inputs con id txtNombre y txtApellido
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;

  // Llama a generarSaludo y guarda el resultado
  let saludo = generarSaludo(nombre, apellido);

  // Imprime el resultado en h4
    mostrarTexto("lblResultado",saludo);
}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}