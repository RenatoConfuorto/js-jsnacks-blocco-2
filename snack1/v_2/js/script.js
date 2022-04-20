let count = 1;
let sum = 0;

while(count <= 5 ){
  let userNumber = parseInt(prompt(`Inserire un numero (${count}/5)`));
  if(!isNaN(userNumber)){
    console.log(userNumber);
    sum += userNumber;
    count++;
  }
}

console.log(`La somma è: ${sum}`);