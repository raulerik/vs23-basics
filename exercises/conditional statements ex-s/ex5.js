const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage kirja suurus: ', size => {
  readline.question('Sisestage kirja teema pealkiri: ', theme => {
    readline.question('Kas kirjaga on kaasas fail: ', file => {
      if(theme == "" || (file == "jah" && size > 1)){
        console.log("Kiri on spamm")
      } else {
        console.log("Kiri ei ole spamm")
      }
      readline.close()
    })
  })
})