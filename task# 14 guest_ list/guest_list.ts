//EXERCISE# 14 = Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 //Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guest_list: string[] = ['muhib','emaz','sami'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThanks you!')
}