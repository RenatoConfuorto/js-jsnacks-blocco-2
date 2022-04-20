const guestNames = ['Vittorio', 'Andrea', 'Giovanni', 'Sara', 'Maria', 'Marta'];
const guestLastName = ['Rossi', 'Esposito', 'Fontana', 'Barbato', 'Salerno', 'Silvestro', 'Franzese'];
const guests = [];

const guestNumber = 3;
let i = 0;
while(i < guestNumber){
  //generare un nome casuale
  const randomName = guestNames[Math.floor(Math.random() * guestNames.length)];
  const randomLastName = guestLastName[Math.floor(Math.random() * guestLastName.length)];
  
  const guestFullName = `${randomName} ${randomLastName}` 
  guests.push(guestFullName);

  console.log(randomName, randomLastName, i);
  i++;
}

console.log(guests);