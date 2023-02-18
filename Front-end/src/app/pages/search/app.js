// EN ESTE EJERCICIO PASAN 3 EXPECT SON LOS QUE INDICAN QUE NO UTILIZAS LOS METODOS (values, keys, entries)
let auxNombre=""
let auxApellido=""
function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    // 


  objeto.nombre=objeto.apellido
  



  return objeto;

}

console.log(intercambio({nombre:"Fulano", apellido:"Rodriguez"}));
    // Tu código: