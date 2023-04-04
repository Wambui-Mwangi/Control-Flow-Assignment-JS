// Write a function that accepts an array of strings and console.logs each element using a for loop.

function arrStrings(array) {
    for (let s = 0; s < array.length; s++) {
        console.log(array[s]);
}
}
let array = ["Morning", "Evening", "Afternoon", "Night"];
arrStrings(array);

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function arrNumbers(arr){
    arr.forEach(element => console.log(element*2) );
}
let arr = [2,5,6,8,10];
arrNumbers(arr);

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function addMultiply(arr1){
    // let num = 0;
    let empty = [];
    for (let num = 0; num < arr1.length; num++) {
        if(num <=3){
       empty.push(arr1[num]*8);
       console.log(empty);
    }

    else if(num >= arr1.length-2){
        empty.push(arr1[num]+5);
        console.log(empty);
    }
}
}

let arr1 = [2,3,8,12,15,26,44];
addMultiply(arr1);

// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function check(arrNum){
    let n = 0;
    while (n < arrNum.length) {
        console.log({n});
        if (n===4) {
            break;
        }
        n++;
    }
    // console.log(n);
}
check(arrNum);

// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruit(fruits){
    for (let f = 0; f < fruits.length; f++) {
        if (f===2) {
            continue;
        }
    console.log(f);
    }
}
fruit(fruits);