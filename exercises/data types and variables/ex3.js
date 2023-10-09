const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage astendaja: ', astendaja => {
  readline.question('Sisestage astme alus: ', astmeAlus => {
    let result = Math.pow(astmeAlus, astendaja)
    console.log(result);
    readline.close();
  })
});