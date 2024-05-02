//EXERCISE# 6 = Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white space.


const personName :string = "   \n\tfasi\t\n   ";

console.log(personName);

const without_whitespace :string = personName.trim();

console.log(without_whitespace);


