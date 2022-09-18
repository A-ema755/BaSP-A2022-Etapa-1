console.log('\n--EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('-Exercise 3.a:');

var arr1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(arr1[4] + ' ' + arr1[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('\n-Exercise 3.b:');
console.log(arr1.sort());

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('\n-Exercise 3.c:');
arr1.unshift('Ianuarius');
arr1.push('December');
console.log(arr1);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('\n-Exercise 3.d:');
arr1.shift();
arr1.pop();
console.log(arr1);

/* e. Invertir el orden del array (utilizar reverse). */

console.log('\n-Exercise 3.e:');
arr1.reverse();
console.log(arr1);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */

console.log('\n-Exercise 3.f:');
var joined1 = arr1.join(" - ");
console.log(joined1);

/* d. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('\n-Exercise 3.d:');
var arr2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var slice1 = arr2.slice(4,11);
console.log(slice1);