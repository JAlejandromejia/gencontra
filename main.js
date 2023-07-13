function generarContraseña() {
  // se obtiene valor de longitud del id "length" y lo convierte a un número entero con parseInt()
    let longitud = parseInt(document.getElementById("length").value);
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%-_";
    let contraseña = "";
  
    //Si la longitud es NaN (no es un número) o está fuera del rango, se muestra una alerta al usuario y la función se detiene.
    while (isNaN(longitud) || longitud < 1 || longitud > 20) {
      alert("Por favor, ingrese una longitud válida entre 1 y 20.");
      return;
    }
    
    for (let i = 0; i < longitud; i++) {

      //Math.random(): devuelve un número decimal aleatorio entre 0 y 1. 
      //Math.random() * caracteres.length: nos da un número decimal aleatorio entre [0, caracteres.length).
      //Math.floor(Math.random() * caracteres.length): redondea hacia abajo el número decimal resultante de la multiplicación anterior. 
      //caracteres.charAt(Math.floor(Math.random() * caracteres.length)): se utiliza para obtener el carácter en una posición específica de una cadena. 
      let caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      contraseña += caracterAleatorio;
    }
  
    //Después de completar el bucle, se actualiza el contenido con el id "output" utilizando la propiedad innerHTML del elemento.
    document.getElementById("output").innerHTML = "Tu contraseña es: " + contraseña;
  }