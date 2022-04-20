const limit = 5;
let sum = 0;

for(let i = 0; i <limit; i++){
  const userNumber = parseInt(prompt(`Inserisci un numero (${i + 1}/${limit})`));

  sum += userNumber;
  console.log(i, userNumber);
}

console.log(`La somma è: ${sum}`);