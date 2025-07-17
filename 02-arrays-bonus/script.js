const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
for(let i = teachers.length -1; i >= 0 ; i--){
  const reversedTeachers = teachers[i];
  console.log(reversedTeachers);
}


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(let i = 0; i < teachers.length; i++){
  if (teachers[i].length >= 5)  {
    longNames.push(teachers[i]);    
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const filteredTeachers = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] !== 'Ed') {
    filteredTeachers.push(teachers[i]);
  }
}
console.log(filteredTeachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent


for(let i = 0; i < teachers.length; i ++){
  if (teachers[i] === 'Fabio') {
    const isFabioPresent = teachers[i];
    console.log(isFabioPresent);
  }
}


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;