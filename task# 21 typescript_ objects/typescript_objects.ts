// EXERCISE# 21 = Typescript objects: 
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


//Write a program that creates Objects containing these items.


// data type of person objects
interface person {
    age : number,
    name : string,
    nationality : string,
    student : boolean
}

// person objest
let person = {

    age : '30' ,
    name : 'muhib' ,
    nationality : 'pakistan' ,
    student : true
}
// print person
console.log(person);



// data type of car object
interface car {
    maker : string,
    colour : string,
    makingyear : number
    automatic : boolean

}

//car object 
let car = {
    maker : 'honda' ,
    colour : 'navy blue' ,
    makingyear : '2022' ,
    automatic : true 
}

// print car object 
console.log(car);