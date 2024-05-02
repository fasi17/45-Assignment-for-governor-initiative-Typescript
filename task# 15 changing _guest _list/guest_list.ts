//EXERCISE# 15 = Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.


let guest_list: string[] = ['muhib','emaz','sami'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n')
}


let absent_guest: string = 'muhib';
let new_guest: string = 'saim';

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!\n\n')
}

console.log(`mr. ${absent_guest} is not coming to the party.`)