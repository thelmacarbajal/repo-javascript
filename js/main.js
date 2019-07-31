console.log('Hola mundo from file');

var dias = 365
var edad = 47
console.log('Cuantos dias has vivido? ', dias * edad);

var usb = 1024 * 4
var fotos=usb/3
console.log('caben ',fotos) 

/* 
Tenemos 22 cubiculos, en cada cubiculo podemos meter 3 carros
y 2 camionetas
- Cuantos cubiculos llenamos completos
- Cuantas camionetas sobran
- Cuantos carros sobran
--
camionetas - 57
carros - 130

*/

var parkingSpace = 22
var cars = 130
var suvs = 57

var totalParkingCars = parkingSpace * 3
var totalParkingSuvs = parkingSpace * 2

console.log(
  'Full house ?', (
    (totalParkingCars < cars) && (totalParkingSuvs < suvs)
  )
)

console.log(totalParkingCars - cars)
console.log(totalParkingSuvs - suvs)


