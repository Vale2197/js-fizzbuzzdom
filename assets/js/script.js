/* Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. */
const list = document.querySelector(".numberList");
const title = document.createElement("h1");

//Scrivi un programma che esegua un ciclo da 1 a 100
for (let i = 1; i <= 100; i++ ) {
    console.log(i);
    
    if (i % 3 == 0 && i % 5 == 0) {
        list.innerHTML += `<li class="redBox"> fizzBuzz </li>`;
    } 
    
    else if ( i % 3 == 0) {
        list.innerHTML += `<li class="greenBox"> fizz </li>`;
    }
    
    else if ( i % 5 == 0) {
        list.innerHTML += `<li class="yellowBox"> buzz </li>`;
    } 
    
    else {
        list.innerHTML += `<li class="blueBox"> ${i} </li>`;
    }
    
}

list.insertAdjacentElement("beforebegin", title);
title.innerHTML = "FizzBuzzDOM";


