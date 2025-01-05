for ( let num = 1; num <= 100; num++){
    if (num % 3===0 && num %5===0){
        console.log(`FizzBuzz`); // Stampa FizzBuzz se è multiplo di 3 e di 5
    }
    else if (num % 3===0 ){
        console.log(`Fizz`); // Stampa il numero solo se non è multiplo di 3
    } else if (num % 5===0 ){
        console.log(`Buzz`); // Stampa il numero solo se non è multiplo di 5
    } else {
        console.log(num); // Stampa il numero solo se non è multiplo di 3 o 5
    }
    }

