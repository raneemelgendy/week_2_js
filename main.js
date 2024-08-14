console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 === typeof +"-40"); // true
console.log(typeof 10 === typeof -"-40"); // true
console.log(typeof "10" !== typeof 10); // true
console.log(typeof 20 !== false); // true



// ----------------------------------------------------------------------



let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(typeof num1 == typeof num2); // true
console.log(num2 >= num1); // true


// ----------------------------------------------------------------------



let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a < b || a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true




// ----------------------------------------------------------------------



// Test Case 1
let num = 9; // "009"

if(num < 10){
console.log("0"+"0"+num);
}
else if(num>10 && num<100){
console.log("0"+num);
}
else{
    console.log(num);
}


// ----------------------------------------------------------------------

let num3 = 9;
let str = "9";
let str2 = "20";

// Output
if( num3 == str ){
console.log( "{num3} Is The Same Value As {str}"
);
console.log( "{num3} Is The Same Value As {str} But Not The Same Type");
}
if(num3!== str2){
console.log("{num3} Is Not The Same Value Or The Same Type As {str2}")
}
if(typeof str === typeof str2){
console.log("{str} Is The Same Type As {str2} But Not The Same Value"
)
}

"{num3} Is The Same Value As {str}"
"{num3} Is The Same Value As {str} But Not The Same Type"
"{num3} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"


// ----------------------------------------------------------------------


let Num1 = 10;
let Num2 = 30;
let Num3 = "30";

// Needed Output
if(Num3>Num1 && Num3==Num2 && Num3!==Num2 && Num3!==Num1){   //مش عارفه اعملها غير بالطريقه دي
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"




// ----------------------------------------------------------------------



// Edit What You Want Here

let num4 = 10;
let num5 = 9;
let num6 = 10;
let num7 = 32;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num4 > num5) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num4 > num5 && num4 < num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num4 > num5 && num4 === num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num4 + num5) < num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num4 + num6) < num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num4 + num5 + num6) < num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num7 - (num4 + num6) + num5 === 21) {
  console.log("True");
} else {
  console.log("False");
}




// ----------------------------------------------------------------------


 //let day = "   friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"
switch (day) {
    case "  friday  ":
        console.log("You Need To Remove Spaces And Make First Letter Capital => Friday");
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available"); 
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Teusday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");                           
}


// ----------------------------------------------------------------------


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let Num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// Method 2
console.log(myFriends.slice(0,Num)); // ["Ahmed", "Elham", "Osama"];


// ----------------------------------------------------------------------



let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]




// ----------------------------------------------------------------------



let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


// ----------------------------------------------------------------------


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// ----------------------------------------------------------------------

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solution
if(haystack.includes(needle)===true){
console.log("found");
}
if(haystack.indexOf(needle)===1){
  console.log("found");
}
if(haystack.lastIndexOf(needle)===1){
console.log("found");
}


// ----------------------------------------------------------------------

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs=arr1.concat(arr2).sort().slice(arr2.length);
console.log(allArrs.join("").toLowerCase()); // fxy

// ----------------------------------------------------------------------


let start = 10;
let end = 100;
let exclude = 40;


for(let i=start ; i<=end ; i+=start){
     if(i === exclude){
       continue;
     }
     console.log(i);
 }

// Output
10
20
30
50
60
70
80
90
100


// ----------------------------------------------------------------------


// let Start = 10;
// let End = 0;
// let stop = 3;

// for( let i= Start ; i>=End ; i--){ // ده حل تاني بس بيحط 0 جمب ال 10 برضو
//   console.log(`0${i}`);
//  if (i===stop)break;
// }

let Start = 10;
let End = 0;
let stop = 3;

for (let i = Start; i >= End; i--) {
  console.log(i.toString().padStart(2, '0')); // عملت سيرش ع الحته دي
if (i === stop) break;
}


// Output
//10
// 09
// 08
// 07
// 06
// 05
// 04
// 03



// ----------------------------------------------------------------------


let strt = 1;
let endd = 6;
let breaker = 2;

for(let i = strt ; i<=endd ;i++){
console.log(i);
for(let j =breaker ; j<=endd-breaker ;j+=breaker){
console.log(`--${j}`);
}
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// ----------------------------------------------------------------------



let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
console.log(index);
index-=jump;
if(index===jump)
break;
}


// Output
10
8
6
4



// ----------------------------------------------------------------------



let Friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < Friends.length; i++) {
  if (Friends[i][0]===letter.toUpperCase()) {
    continue;
  }
  console.log(`"${i} => ${Friends[i]}"`);
}


// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"  
"5 => Sameh"

// ----------------------------------------------------------------------


// let begin = 0;
// let swappedName = "elZerO";

// for(i=begin; i<swappedName.length; i++){
//   console.log(i);
// if(i.toString()==="Z"&&i.toString()==="O"){ // محاوله فاشله:(
// swappedName.toLowerCase();
// }else{
//   swappedName.toUpperCase();
// }
// }

let swappedName = "elZerO";
let result = "";

for (let i = 0; i < swappedName.length; i++) {
    let char = swappedName[i];
    if (char === char.toUpperCase()) {
        result += char.toLowerCase();  // عملت سيرش و ده كان الحل بس مش فاهمه حتة result دي
    } else {
        result += char.toUpperCase();
    }
}

console.log(result); // Output: "ELzERo"


// Output
"ELzERo"

// ----------------------------------------------------------------------


let _start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = 0; i < mix.length; i++) {
    if (typeof mix[i] === "number" && mix[i]!==1) { // مش عارفه ازاي نفعت ب 1 مش ب 0
      console.log(mix[i]);
        }
        
    }
    



// Output
2
3
4

// ----------------------------------------------------------------------


let My_friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let Index = 0;
let counter = 0;
while(Index < My_friends.length){
  if(My_friends[Index][0]!=="A" && typeof My_friends[Index] === "string"){
    counter++;
    console.log(`"${counter} => ${My_friends[Index]}"`);
  }
  Index++;
}
// Output
"1 => Sayed"
"2 => Mahmoud"