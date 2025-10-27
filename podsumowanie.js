///PODSUMOWANIE INFORMACJI O JAVA SCRIPT:


                                                                                        // 1 - KONWERSJA TYPÓW:

let x = 5;
x= String(x)
x=Number(x)
x=Boolean(x)

//typ zmiennej:
let z = typeof x

// 2 - KRÓTKI IF ELSE:

let x1 = 6;

x1 >5 ? console.log("greater") : x1<5 ? console.log("smaller") :   console.log("eaquel"); 

                                                                                        // 3 - OPERACJE NA STRINGACH:

let x2 = "To jest string to Formatowania jjj ";

x2.charAt(0) // zwraca znak w pierwszym indeksie
x2.indexOf("j") // zwraca indeks gdzie dany znak wystąpił pierwszy raz
x2.lastIndexOf("j") // zwraca indeks gdzie dany znak wystąpił ostatni raz
x2.replace("jest","JEST") // zamienia fragment stringa
x2.length // długość ciągu znaków
x2.trim() // usuwa spacje z początku i końca ciągu
x2.repeat(2) // powtarza ciąg znaków 2 razy 
x2.startsWith("To") // sprawdza czy ciąg zaczyna się od "To"
x2.includes("jjjj") // sprawdza czy występuje w nim dany ciąg znaków. Jeśli nie to zwraca false
x2.replace("j","%") // zamienia pierwsze j na %
x2.replaceAll("o","a")// zamienia wszystkie j na a
x2.toUpperCase()
x2.toLowerCase()
console.log(x2)



// wycinanie fragmentow ciągu znaków:
let to = x2.slice(0,2);

// rozszczepianie stringa na tablice znaków:
let s = "string"
let table = [...s]
console.log(table)



                                                                                        // 4 - ŁAŃCUCHOWE ŁĄCZENIE METOD:

let x3 = "   tymon sZYLER   ";
let imie = x3.trim().charAt(0).toUpperCase() + x3.trim().slice(1,5)
let nazwisko = x3.trim().charAt(6).toUpperCase() + x3.trim().slice(7,12).toLowerCase();
let finish = imie +" "+ nazwisko;
console.log(finish)


                                                                                        // 5 - OPERACJE NA TABLICACH:

let cars = ["opel","lambo","tesla","porsche"]

cars.push("maserati") // dodane na koniec 
cars.unshift("mangodb") // dodanie na początek
cars.shift() // usuwa pierwszy element
cars.pop() // usuwa ostatni element
cars.length // dlugosc tablicy
cars.indexOf("opel") // zwraca indeks pod którym znajduje się dany element. jesli go nie ma w tabeli to zwraca -1
cars.sort() // soruje alfabetycznie
cars.reverse(); // odwraca kolejność elementów


// największa wartość w tablicy
let neww = [1,2,6,8,23,4,7]
let pp= Math.max(...neww)
console.log(pp)


//łączenie tablic w jedną:
let tab1 = [1,2,3]
let tab2 = [4,5,6]
let h =[...tab1,...tab2]
console.log(h)

//metody wykonujące daną funckje dla każdego z elementów tablicy:

let tmp = [1,3,5,7,13]
let tmp1 = [2,4,6,8]

let t1 = tmp.map(n => n**2) //podnosi każdy element do kwadratu i zwraca nową tablice
let t2 = tmp1.filter(n=> n>3) // odfiltrowuje elementy tablicy
console.log(t1)
console.log(t2)