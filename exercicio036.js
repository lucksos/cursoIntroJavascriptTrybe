function imprimaQuadradoAsterisco(n) {
// não altere a linha acima
    
/*
 * Escreva nas linhas a seguir um código que 
 * imprima um quadrado de asteríscos
 * de altura e largura igual ao valor de n
 */
    for (var d = 0; d < n; d++) { /* Demorei para perceber que cada 'for' precisava de uma variável diferente. */
        for (var c = 0; c < n; c++) {
            process.stdout.write("*") /* Usei para que não fosse criada uma nova linha após cada asterisco */
        }
        console.log("") /* E aqui uma quebra de linha a cada linha completa de asteríscos */
    }
    
    
    
    
// não altere a linha abaixo
}
// fim do seu código
