// Your code goes here
//task#1
//convert convert('1', 2, 3, '4') // [1, '2', '3', 4]
function convert (){
    let array= [...arguments];
    let newArray = [];
    array.map(function(el){
            if(typeof el === 'string'){
                newArray.push(parseInt(el));
            }else if(typeof el === 'number'){
                newArray.push(el.toString());
            }
            return false;
        }
    );
    return newArray;
}

// console.log(convert('1', 2, 3, '4'));

// task 2
//2. Write function, which iterates over array and executes function on each element.
//
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // logs 2 4 6
function execforEach (arr, func){
    let resp = arr.forEach(func);
    return resp;
}
// console.log(execforEach([1,2,3], function(el) {console.log(el * 2)}));

//task 3
//3. Write function, which returns transformed array based on function, which passed as a second parameter (callback). If array contains a number as string, it should convert it and return as number. You’re allowed to change a body of that callback function if you need. Reuse function from task 2.
//
// mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]
function mapArray(arr, func) {
    const newArray=[];
    for (let i = 0; i <arr.length; i++){
        newArray.push(func(parseInt(arr[i])));
    }
    return newArray;
}
// console.log(mapArray([2, '5', 8], function(el) {return el + 3}));

//task 4
//4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
//
// filterArray([2, 5, 8], function(el) { return el % 2 === 0 })
// // returns [2, 8]
function filtersArray (arr, func) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let res = func(arr[i]);
        if (res === true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
// console.log(filtersArray([2, 5, 8], function(el) { return el % 2 === 0 }) );

//task 5
//5. Write a function that reverses the string value passed into it.
//
// flipOver('hey world') // 'dlrow yeh'
function flipsOver(str) {
    let array = [...str];
    let arrReverse = array.reverse();
    return arrReverse.join('');
}
// console.log(flipsOver('hey world'));

//task 6
//6. Write a function which creates an array from the given range of numbers
//
// makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
function createListFromRange(arr) {
    let start = arr[0];
    let end = arr[1];
    const length = end+1 - start;
    let newArray = Array.from({ length }, (_, i) => start + i);
    return newArray;
}
// console.log(createListFromRange([2, 7]));

//task 7
//7. Write a function that accepts an array of object and returns new array of values by passed key name.
// That function should not change the original array. Reuse function from task 2.
//
// const actors = [
//   { name: ‘tommy’, age: 36 },
//   { name: ‘lee’, age: 28 }
// ];
//
// getArrayOfKeys(actors, ‘name’); // [‘tommy’, ‘lee’]
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }];

function getArrayOfKey (arr, key) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i][key]);
    }
    return newArr;
}
// console.log(getArrayOfKey(actors, 'name'));

//task8
//8. Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 30 with '*'. It should return a new array with numbers and '*' instead of numbers lowest from 30. Reuse function from task 3.
//
// substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']
function subs(arr) {
    let newArray =[];
    let thirty = 30;
    for(let i =0; i<arr.length; i++){
        if(arr[i]<=thirty){
            newArray.push('*');
        }else{
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}
// subs([58, 14, 48, 2, 31, 29]);

// task 9
//9. Write a function which returns a day number that was some amount of days ago from the passed date.
// It should not change the given source date.
//
// const date = new Date(2019, 0, 2);
// getPastDay(date, 1); // 1, (1 Jan 2019)
// getPastDay(date, 2); // 31, (31 Dec 2018)
// getPastDay(date, 365); // 2, (2 Jan 2018)

const date = new Date(2019, 0, 2);
const msDay = 86400000;

function getPastDay(date, days) {
    let msUTC = Date.parse(date);
    let daysUTC = days*msDay;
    let newDate = msUTC-daysUTC;
    return new Date(newDate);
}
//console.log(getPastDay(date, 1));

//task #10
function formatDate(date){
    return date.toISOString();

}
// console.log(formatDate(new Date()));
