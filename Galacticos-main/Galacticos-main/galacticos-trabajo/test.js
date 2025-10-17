// test.js

// Supongamos que existe una función generarSaludo
// Si no está en otro archivo, puedes definirla así para probar:
function generarSaludo(nombre, apellido) {
  return Hola +{nombre} +{apellido}
}

// Función principal que toma los valores de las cajas de texto
function saludar() {
  // Obtiene los valores de los inputs con id txtNombre y txtApellido
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;

  // Llama a generarSaludo y guarda el resultado
  let saludo = generarSaludo(nombre, apellido);

  // Imprime el resultado en consola
  console.log(saludo);
}