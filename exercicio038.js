function ehPalindromo(palavra) {
// não altere a linha acima

 /*
 * Complete o código abaixo para verificar se 
 * varíavel `palavra` é um palíndromo ou não.
 * Caso seja um palíndromo, a função deve retornar
 * `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
 * a função deve retornar 
 * `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
 */
// escreva aqui seu código:

    
 var listaString = []
    for (var c = palavra.length - 1; c >= 0; c--) {
        listaString.push(palavra[c]);
    }
    if (palavra === listaString.join('')) {
        return `SIM, SOU UM PALÍNDROMO`;
    } else {
        return `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`;
    }
    


// não altere as linhas abaixo
}
