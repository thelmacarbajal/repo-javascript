var myPet = 'Sr. Peabody'

myPet = 'Misifus'

let myDog = 'Sr. Peabody'

myDog = 'Misifus'

const NAME = 'David'

/*
cual es el area de un circulo cuyo diametro es 10 */

var PI = 3.1416
var DIAMETRO = 10
var RADIO = DIAMETRO / 2 
const AREA = (PI) * (RADIO **2) 

/*
typeof 'hola mundo'
typeof 1 
typeof true 
typeof {}
typeof null 
typeof undefined 
typeof ('4')
typeof 4
*/


var number = 1 

if (number === 1) {
    console.log('si es 1 numerico')
} else if ((typeof number !== 'number') && ('nubmer')) {
    console.log('no es valido')
} else {
    console.log('No es valido')
}

var numberOne = 12
var numberTwo = -10

if ((numberOne > 11) || (numberTwo > 11)){
console.log('uno de los dos es mayor a 11')
} else if((numberOne <= 2) || (numberTwo < 2)) {
console.log('Uno de los dos es menor a 2');
} else {
console.log('No se pudo');
}

// Dado un numero {number}, verificar si es par
var numero = 10
if((numero % 2 === 0) && (typeof numero === 'number')){
console.log(' El numero es par')
} else if((numero % 2 === 1) && (typeof numero === 'number')){
    console.log(' El numero es impar');
} else {
console.log(' El numero invalido')
}


/*  Saber si el producto de 2 numeros */