const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ainepunktide arv: ', ainepunkt => {
  readline.question('Sisestage nadalate arv: ', nadalad => {
    let result = Math.ceil((ainepunkt * 26 ) / nadalad) 
    console.log(result);
    readline.close();
  })
});