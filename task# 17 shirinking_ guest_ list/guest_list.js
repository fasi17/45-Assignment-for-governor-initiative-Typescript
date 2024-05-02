"use strict";
//EXERCISE# 17 = shirinking guest list:  You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
let guest_list = ['muhib', 'emaz', 'sami'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n')
// }
let absent_guest = 'muhib';
let new_guest = 'saim';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n')
// }
console.log(`mr. ${absent_guest} is not coming to the party.`);
console.log('good news! we find big table so we inviting 3 more guest.');
guest_list.unshift('yasa');
guest_list.splice(2, 0, 'wasil');
guest_list.push('sameer');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n');
}
console.log('\nsorry we can not arrange big table, only two peoples will be invited');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry mr. ${remove_guest}, you are not invited for dinner`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear mr. ' + guest_list[i] + ',\n\nyou are still invited.\n\nThanks you!\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
