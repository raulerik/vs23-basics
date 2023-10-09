const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Kas soovite istekoha valida ("ise") voi loosida ("loos")? ', select => {
  if( select == "ise") {
    readline.question('Kas soovite istuda akna aares ("akken") voi mitte ("muu")? ', window => {
      if(window == "akken"){
        console.log("Valisite ise. Aknakoht")
      } else {
        console.log("Valisite ise. Vahekaigukoht")
      }
      readline.close();
    })
  } else {
    let seat = Math.ceil(Math.random() * 3)
    if(seat < 2){
      console.log("Istekoht loositi. Aknakoht")
    } else {
      console.log("Istekoht loositi. Vahekaigukoht")
    }
    readline.close(); 
  }     
})