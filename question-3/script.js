/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node script.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */

// Observaciones:
// He probado varias veces el código, en mi consola local, como en consola de Chrome y tambien corriendo el script.
// El resultado es el esperado para el algoritmo, pero el script arroja un resultado erróneo. Enviando el mismo string, en las dos consolas el resultado es el esperado, pero el script arroja el resultado opuesto en algunos casos.


 function parenthesisChecker(str) {

  const signs = {'(':')', '{':'}', '[':']'};
  const openings = Object.keys(signs);
  const closings = Object.values(signs);
  const signsReaded = [];

  for(let i=0; i < str.length; i++) {
    let character = str[i];
    // verificamos si el caracter se corresponde con algun signo de apertura y lo pusheamos
    if(openings.includes(character)) {
      signsReaded.push(character);
    }
    // caso contrario, verificamos que el caracter se corresponda con algun signo de cierre, y evaluamos que sea el valor correcto para el ultimo signo de apertura leido
    if(closings.includes(character)) {
      if(signs[signsReaded.pop()] !== character) return false;
    }
  }
  // por ultimo, una vez terminada la iteración, verificamos que no hayan quedado signos de apertura leidos sin haber tenido su correspondiente cierre
  return !signsReaded.length;
}


const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);