console.log('\n--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('-Exercise 6.a:');
function ex6a(n1, n2) {
    if (!typeof(n1 || n2) == 'number') {
        alert('One of the parameters is not a number');
        return 'NaN';
    }
    else if (!validateInteger(n1)){
        roundFloat(n1);
    }
    else if (!validateInteger(n2)){
        roundFloat(n2);
    }
    else {
        funcSum1 = n1 + n2;
        console.log(funcSum1);
    }
}

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de 
los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error 
y retornar el valor NaN como resultado. */

console.log('\n-Exercise 6.c:');

/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log('\n-Exercise 6.c:');
function validateInteger(nInt){
    if(nInt % 1 === 0) {
        return true;
    }
}

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */

console.log('\n-Exercise 6.d:');

/* e. Convertir la validación del ejercicio 6d) en una función separada y 
llamarla dentro de la función suma probando que todo siga funcionando igual. */

console.log('\n-Exercise 6.e:');

function roundFloat(nFloat){
    return Math.round(nFloat) && alert('One of the parameters is float type');
}