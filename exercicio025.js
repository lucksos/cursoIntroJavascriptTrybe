function comparaStrings(primeiraString, segundaString) {
// não altere a linha acima

/*
 * Complete o código abaixo atribuindo na variável resultado
 * a concatenação das strings `primeiraString` e 
 * `segundaString` de acordo com as regras do exercício
 */

 if (primeiraString.length < segundaString.length) {
     var resultado = primeiraString + segundaString;
 } else if (segundaString.length <= primeiraString.length) {
     var resultado = segundaString + primeiraString;
 }
// não altere as linhas abaixo
  return resultado;
}
// fim do seu código
