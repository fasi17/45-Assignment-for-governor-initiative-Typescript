// // EXERCISE# 43 = Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let magician : string[] = ['harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore'];

function copyArray(arr:string[]){
    return [...arr]
}


function make_great(magicianarray:string[] ){

    for(let i=0; i<magicianarray.length; i++){
        magicianarray[i] = 'the great ' + magicianarray[i]
    }

}

function show_magicians(magicians: string[]){
    magician.forEach(element => {
        console.log(element);
        
    });
}



const copymagicianArray =  copyArray(magician)


make_great(copymagicianArray);


console.log('\n\n this is my original array')
show_magicians(magician);


console.log('\n\n this is my modified copy of the array')
show_magicians(copymagicianArray);










