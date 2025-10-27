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
age = 7;

age ==18 ? console.log(age) : age >18 ? console.log("wiecej niz 18") : console.log("mniej niz 18");


//////////////////////////////////////////////////////////////////////////////////////////////////////////działąnia na stringach:

let str = "mysia";

for(let i=0;i<str.length;i++){
    console.log(`${str.charAt(i)}`);
}
