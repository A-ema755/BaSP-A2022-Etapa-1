console.log('\n--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */ 

console.log('-Exercise 2.a:');
var str1 = 'hello world';
var uppStr1 = str1.toUpperCase();
console.log(uppStr1);

/* b. Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring) */

console.log('\n-Exercise 2.b:');
var str2 = 'Hellohello';
var subStr2 = str2.substring(0,5);
console.log(subStr2);

/* c. Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('\n-Exercise 3.c:');
var str3 = 'Helloworld'
var subStr3 = str3.substring(7,10);
console.log(subStr3);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('\n-Exercise 3.d:');
var str4 = 'rhinoceros';
sumStr = str4.substring(0,1).toUpperCase() + str4.substring(1,10).toLowerCase();
console.log(sumStr);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf) */

console.log('\n-Exercise 3.e:');
var str5 = 'Hello World';
var indexStr5 = str5.indexOf(' ');
console.log(indexStr5);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras 
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */ 

console.log('\n-Exercise 3.f:');
var str6 = 'javascript activities'
sumStr2 = str6.substring(0,1).toUpperCase() + str6.substring(1,10).toLowerCase();
sumStr3 = str6.substring(11,12).toUpperCase() + str6.substring(12,21).toLowerCase();
console.log(sumStr2 + ' ' + sumStr3);




