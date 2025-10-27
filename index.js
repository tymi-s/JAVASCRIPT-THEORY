////////////////////////////////////////////////////////////////////////////////////////////////////////////print
// console.log(`Hi`);
// console.log(`I like the pizza\n`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////alerty
// window.alert(`THEY DONT KNOW ME SON!`);


// document.getElementById("id1").textContent =`This is get element by id`;
// document.getElementById("id2").textContent = `this is id 2`

/*
MULTI 
linear 
commant
*/


// //////////////////////////////////////////////////////////////////////////////////////////////////////////zmienne 

// let x =5;
// console.log(`x variable datatype is ${typeof x}`)



// let age = 15;
// let namee = "Tymon";

// document.getElementById("name").textContent = `my name is ${namee}`;
// document.getElementById("age").textContent = `and I'm ${age} years old`;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////operacje arytmetyczne



// let students =31;

// let x= students*2;
// x+=15;
// console.log(x);

// for(let i =0; i<10;i++){
//     console.log(`i equels ${i}`);
// }


// //////////////////////////////////////////////////////////////////////////////////////////////////////////user input



//EAZY WAY: window.prompt()
//PROFFESIONAL: okienko w html dla użytkownika do wprowadzenia wartości

//WINDOW PROMPT
// let nazwa_uzytkownika= window.prompt(`podaj nazwe uzytkownika: `)
// console.log(nazwa_uzytkownika)


//OKIENKO W HTML:
// let username;
// document.getElementById("button").onclick = function(){
//     username =document.getElementById("username").value;
//     console.log(username);


// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////konwersja typów


// let x =Number( window.prompt("give value: "));
// console.log(typeof x,x++)
// console.log(x)

// //konwersja do stringa
// let z = 5
// z= String(z)
// console.log(z, typeof z)



// //////////////////////////////////////////////////////////////////////////////////////////////////////////krótszy if else (ternary operator):
// age = 7;

// age ==18 ? console.log(age) : age >18 ? console.log("wiecej niz 18") : console.log("mniej niz 18");


//////////////////////////////////////////////////////////////////////////////////////////////////////////działąnia na stringach:

let str = "mysia jest fajna";

console.log( str.charAt(0) ); // returns char at index 0
console.log( str.indexOf("i") );// index of first occurence of "i"
console.log( str.lastIndexOf("s") );// index of last occurence of "s"
console.log( str.replace("mys","pies") );// replaces "mys" with "pies"
console.log( str.length );// length of string
console.log( str.trim() );// removes whitespace from both ends
console.log( str.toUpperCase() )
console.log( str.repeat(2) )// repeats the string 2 times
console.log( str.startsWith(" ") )// checks if string starts with "mys"
console.log ( str.includes("fajna") )// checks if string contains "fajna"

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-"," ");///////////////////////////
console.log(phoneNumber);

let p = "123"
p = p.padStart(15,"0") ////////////////
console.log(p)


//////////////////////////////////////////////////////////////////////////////////////////////////////////slicing strings:

const fullname= "Tymon Szyler";
let firstname= fullname.slice(0,5);
let lastname= fullname.slice(fullname.indexOf("S"),fullname.length);

console.log(firstname);
console.log(lastname);

//////////////////////////////////////////////////////////////////////////////////////////////////////////mthod chaining:

let message = "  hello World! Welcome to JavaScript programming.   "; 
// usuniecie white spaces, przedi i za
// wszystko do lowercase i pierwszy do uppercase

message= message.trim().charAt(0).toUpperCase() + message.trim().slice(1).toLowerCase();    


console.log(message);

//////////////////////////////////////////////////////////////////////////////////////////////////////////arrays:







