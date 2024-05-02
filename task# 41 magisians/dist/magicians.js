"use strict";
// EXERCISE# 41 = Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magician = ['harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore'];
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
