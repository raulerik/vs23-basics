const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesta ohutemperatuur: ', temp => {
  if(parseFloat(temp) <= 4.0){
     console.log(' On jaatumise oht.')
  } else {
    console.log('Ei ole jaatumise ohtu.')
  }
  readline.close();
});