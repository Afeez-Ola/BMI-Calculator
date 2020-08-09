// fibonacci = n => {
//   var output = [];

//   if (n === 1) {
//     output = [0];
//   } else if (n === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];
//     for (var i = 2; i < n; i++) {
//       output.push (output[output.length - 2] + output[output.length - 1]);
//     }
//   }

//   return output;
// };
// output = fibonacci (8);
// console.log (output);

// var bottlesOnWall = 99;
// var bottlesDown = 1;
// var wallBottles = 98;

// function bottlesLyrics() {
//     while (bottlesOnWall >= 0 ) {

//     if (wallBottles === 0) {
//         wallBottles = 'no more'
//     }
//     if (bottlesOnWall === 0) {
//         console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall`);
//     }
//     else {console.log(`${bottlesOnWall} of beer on the wall, ${bottlesOnWall} bottles of beer. Take ${bottlesDown} and pass it around, ${wallBottles} bottles of beer on the wall`);
//     }
//     bottlesOnWall--
//     wallBottles--
//     }
// }

// bottlesLyrics()

// var friends = ['Bolaji', 'Krystal', 'Laura'];

// function payingFriend() {

//     let friendsList = friends.length
//     let randomPosition = Math.floor(Math.random() * friendsList)
//     let payingFriend = friends[randomPosition];

//     return `${payingFriend} is going to buy lunch today!`
// }
// console.log(payingFriend());

// var output = [];

// var count = 1;

// function fizzbuzz () {
//   while (count <= 100) {
//       if (count % 3 === 0 && count % 5 === 0) {
//       output.push ('fizzbuzz');
//     }
//     else if ( count % 3 === 0) {
//       output.push ('fizz');
//     } else if (count % 5 === 0) {
//       output.push ('buzz');
//     } else {
//       output.push (count);
//     }
//       count++;

//   }
//       console.log (output);

// }
// fizzbuzz ();

// var guestName = prompt("What's your name?");

// var guestList = ['bolaji', 'ola', 'laura', 'olivia'];

// if (guestList.includes(guestName)) {
//     console.log('You are welcome!');
// }
// else{
//     console.log('You are not invited!');
// }

// Switching Variables values.
// Not allowed to redeclare the variables to number or string.
// Maximum of 3 lines of code to be used😉

// let a = 8;
// let b = 2;

// console.log (`a is ${a}`);
// console.log (`b is ${b}`);

// Expected output:
// a is 2
// b is 8

// var year = prompt("What year are you checking?")

// function isLeapYear(year) {

//     let modulo400 = year % 400;
//     let modulo1 = year % 100;
//     let modulo4 = year % 4;

//     let output;

//     if (modulo4 === 0 ) {
//         output =  `Leap year.`
//     }

//     else{
//         if (modulo1 === 0 && modulo400 === 0) {
//             output =   `Leap year.`
//         }
//         else{
//             output = `Not leap year.`
//         }
//     }

//     return output
// }
// let output = isLeapYear(year)
// console.log(`${output}`);

function bmiCalculator() {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let sqrtHeight = Math.round(Math.pow(height, 2));

    let result = Math.round(weight / sqrtHeight);
    let output = document.querySelector('.result');

    document.querySelector('form button').addEventListener('click', function(e) {
        e.preventDefault();
    });

    // let interpretation;

    if (result < 18.5) {
        output.innerHTML = result + ' - Underweight';
    } else if (result < 25) {
        output.innerHTML = result + ' - Normal weight';
    } else if (result < 30) {
        output.innerHTML = result + ' - Pre-obesity';
    } else if (result < 35) {
        output.innerHTML = result + ' - Obesity class I';
    } else if (result < 40) {
        output.innerHTML = result + ' - Obesity class II';
    } else {
        output.innerHTML = result + ' - Obesity class III';
    }
    return false;
}