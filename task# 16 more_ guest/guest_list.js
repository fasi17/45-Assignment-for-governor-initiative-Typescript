"use strict";
//EXERCISE# 16 = MORE GUEST: More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ['muhib', 'emaz', 'sami'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n')
// }
let absent_guest = 'muhib';
let new_guest = 'saim';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n');
}
console.log(`mr. ${absent_guest} is not coming to the party.`);
console.log('good news! we find big table so we inviting 3 more guest.');
guest_list.unshift('yasa');
guest_list.splice(2, 0, 'wasil');
guest_list.push('sameer');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n');
}
