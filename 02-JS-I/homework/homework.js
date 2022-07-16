// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { stringify } = require("git-url-parse");

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Aprender';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str ;
}

function suma(x, y) {
  return x + y;   
}

function resta(x, y) {
  return x - y;
  }

function multiplica(x, y) {
  return x * y;
  
}

function divide(x, y) {
  return x / y; 
  
}

function sonIguales(x, y) {
  if (x == y) {
    return true;
  } 
    return false;    
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length) {
    return true;
  }
    return false; 
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  }
    return false;
}

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  }
    return false; 
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  if (num % 2 == 0) {
    return true;
  }
    return false;
}

function esImpar(num) {
  if (num % 2 != 0) {
    return true;
  }
    return false;
}

function elevarAlCuadrado(num) {
  return Math.pow (num,2)
}

function elevarAlCubo(num) {
  return Math.pow (num,3)
}

function elevar(num, exponent) {
  return Math.pow (num,exponent)
}

function redondearNumero(num) {
  return Math.round (num)
}

function redondearHaciaArriba(num) {
  return Math.ceil (num)
}

function numeroRandom() {
 return Math.random()
  
}

function esPositivo(numero) {
    if (Math.round (numero) > 0 ) {
      return 'Es positivo';
    }
    if (Math.round (numero) < 0 ) {
        return 'Es negativo';  
    }
    if (Math.round (numero) == 0 ) {
      return false;  
  }
}

function agregarSimboloExclamacion(str) {
  return str+'!';
}

function combinarNombres(nombre, apellido) {
  return nombre +' '+ apellido;
}

function obtenerSaludo(nombre) {
  return 'Hola' + ' ' + nombre+'!'; 
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto*ancho;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return 4*lado;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return base*altura/2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro*1.2;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
  return 'Es vocal'
  }
  else if (letra.length > 1) {
    return 'Dato incorrecto'
  }
  return 'Dato incorrecto'
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
