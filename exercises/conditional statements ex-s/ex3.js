const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage enda vanus: ', age => {
  readline.question('Sisestage enda sugu (M, m või N, n): ', sex => {
    readline.question('Sisestage treeningu tüüp (1, 2 or 3): ', type => {
      let maxPuls
      if(sex == 'M' || sex == 'm'){
        maxPuls = 220 - age
      }
      if(sex == 'N' || sex == 'n'){
        maxPuls = 206 - 0.88 * age
      }
      let min
      let max
      if(type == '1'){
        min = 0.5 * maxPuls
        max = 0.7 * maxPuls
      } else if(type == '2'){
        min = 0.7 * maxPuls
        max = 0.8 * maxPuls
      } else if(type == '3'){
        min = 0.8 * maxPuls
        max = 0.87 * maxPuls
      }
  console.log('Pulsisagedus peaks olema vahemikus ' + Math.round(min) + ' kuni ' + Math.round(max) + '.')
  readline.close();
    })
  })
});