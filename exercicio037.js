function buscaNumeroPrimos(n) {
//não altere a linha acima

/*
 * Nas linhas a seguir, escreva um código que encontre todos
 * os números primos entre 0 e n e coloque-os num array chamado
 * `numerosPrimos`(você deve criar esse array)
 */ 
    numerosPrimos = []
    for (var c = 2; c <= n; c++) {
        contagemDivisores = 0;
        for (var d = 1; d <= c; d++) {
            if (c % d === 0) {
                contagemDivisores++;
            }
        }
        if (contagemDivisores === 2) { /* Caso o número tenha apenas 2 divisores... */
            numerosPrimos.push(c); /* ...ele é adicionado à lista de primos */
        }
    }
    
    
//não altere as linhas abaixo
  return numerosPrimos;
}
// fim do seu código
