//Dichiarare le variabili
let x = 0;

//Creare il ciclo per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  x = i;
  //Scope per controllare se sono multipli di 3 e 5
  if (x % 3 === 0 && x % 5 === 0) {
    console.log(x + " FizzBuzz");
    //Scope per controllare se sono multipli di 3 o 5
  } else if (x % 3 === 0) {
    console.log(x + " Fizz");
  } else if (x % 5 === 0) {
    console.log(x + " Buzz");
  } else {
    console.log(x);
  }
}
