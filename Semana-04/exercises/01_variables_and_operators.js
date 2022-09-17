console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor 
de la suma de ambos números en una 3er variable. */ 

console.log('-Exercise 1.a:');
var num1 = 5;
var num2 = 5;
var sum = num1 + num2;
console.log(sum);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log('\n-Exercise 1.b:');
var numStr1 = 'Hello ';
var numStr2 = 'World';
var strSum = numStr1 + numStr2;
console.log(strSum);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('\n-Exercise 1.c:');
var numStr3 = 'Emanuel';
var numStr4 = 'Guevara';
var strSum2 = numStr3.length + numStr4.length;
console.log(strSum2);