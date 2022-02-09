/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node script.js 100
 */

// forma recursiva

function waysQtyRecursive(stairs) {
    // si tenemos una stairs de 0, 1, 2 o 3 peldaños, la respuesta es la misma que la cantidad de peldaños
    if(stairs <= 3) return parseInt(stairs);
    return waysQtyRecursive(stairs - 1) + waysQtyRecursive (stairs - 2);
}

// forma iteracion con for

function waysQtyForCicle(stairs) {
    if(stairs <= 3) return parseInt(stairs);

    let stairsMinusOne = 1;
    let stairsMinusTwo = 2;

    for(let i = 2; i < stairs; i++) {
        let sum = stairsMinusOne + stairsMinusTwo;
        stairsMinusOne = stairsMinusTwo;
        stairsMinusTwo = sum;
    }
    return stairsMinusTwo;
}

// Sin dudas la mejor opción en cuanto a complejidad temporal y espacial es la opción "waysQtyForCicle"
// waysQtyForCicle tiene una complejidad O(n) y waysQtyRecursive O(2n)
// Por último, como toma el parámetro como string, le agregué un parseInt para que la respuesta sea un número en caso de entrar en el if

const args1 = process.argv.slice(-1);
console.log(`Running question #1 with args ${args1}`)
console.log('RecursiveResponse: ', waysQtyRecursive(args1));
console.log('ForResponse: ', waysQtyForCicle(args1));