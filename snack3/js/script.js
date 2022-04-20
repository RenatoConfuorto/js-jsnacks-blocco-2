let number;

do{
  number = parseInt(prompt('Inserire un numero'));
}while(isNaN(number))

for(let i = 1; i <= number; i++){
  const cube = i * i * i;
  console.log(cube, `(${i})`);
}