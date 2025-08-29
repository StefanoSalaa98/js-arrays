let teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = teachers.reverse();
const reversedTeachers=[];
let j=0;
for(let i=(teachers.length)-1; i>=0; i--){
    reversedTeachers[j]=teachers[i];
    j++;
}
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// const longNames = teachers.filter(name => name.length >= 5);
const longNames=[];
j=0;
for (let i=0; i<teachers.length; i++){
    if(teachers[i].length >= 5){
        longNames[j] = teachers[i];
        j++;
    }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// teachers.splice(5,1);
const temp=[];
j=0;
for (let i=0; i<teachers.length; i++){
    if(teachers[i] !== "Ed"){
        temp[j] = teachers[i];
        j++;
    }
}
teachers=[]; //per poterlo fare devo dichiarare teachers come let e non come const
for (let i=0; i<temp.length; i++){
    teachers[i]=temp[i];
}
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// teachers.splice(1,4);     //rimuovi 'Fabio' dall'array teachers
// const isFabioPresent = teachers.includes("Fabio");
// if (isFabioPresent){
//     console.log("Fabio è presente");
// }
// else{
//     console.log("Fabio non è presente");
// }

//teachers.splice(1,1);
let isFabioPresent = false;
for (let i=0; i<teachers.length; i++){
    if(teachers[i] === "Fabio"){
        isFabioPresent = true;
    }
}
if (isFabioPresent){
    console.log("Fabio è presente");
}
else{
    console.log("Fabio non è presente");
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// const teachersString = teachers.join(', ');
let teachersString='';
for (let i=0; i<teachers.length; i++){
    teachersString+=teachers[i];
    if (i<(teachers.length-1)){
        teachersString+=", ";
    }
}
console.log(teachersString);