// EXERCISE# 26 = Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// Choose a color for an alien as you did in Exercise 25
let alienColour: string = 'green';


// write an if-else chain
// If the alien’s color isn’t green
// print a statement that the player just earned 5 points for shooting the alien.
if(alienColour === "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earn 10 points")
}



// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alienColour = 'yellow'

if(alienColour === "green"){
    console.log("print a statement that the player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earn 10 points")
}
