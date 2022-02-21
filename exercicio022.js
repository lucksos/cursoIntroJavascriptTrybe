function determinarGeracao(anoDeNascimento) {
// não altere a linha acima
    
/* 
 * Atribua um dos seguintes valores na variável `resultado`
 *
 * Geração silenciosa: para os nascidos até o ano de 1945;
 * Boomers: para os que nasceram depois de 1945 até 1964;
 * Geração X: para os que nasceram depois de 1964 até 1980;
 * Millennials: para os que nasceram depois de 1980 até 1996;
 * Geração Z: para os que nasceram depois de 1996;
 */
  
  if (anoDeNascimento <= 1945) {
      var resultado = 'Geração silenciosa';
  } else if (anoDeNascimento > 1945 && anoDeNascimento <= 1964) {
      var resultado = 'Boomers';
  } else if (anoDeNascimento > 1964 && anoDeNascimento <= 1980) {
      var resultado = 'Geração X';
  } else if (anoDeNascimento > 1980 && anoDeNascimento <= 1996) {
      var resultado = 'Millennials';
  } else {
      var resultado = 'Geração Z';
  }

// não altere as linhas abaixo
  return resultado;
}
