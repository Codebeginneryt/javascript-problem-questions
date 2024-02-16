//1. Given a string reverse each word in the sentences ?

var str =  "my name is rohit kumar gola";

var ans =  str.split(" ")
.map(function(word){
    return word.split("").reverse().join("");
})

console.log(ans.join(" "));


//2. How to check if an object is an array or not?
 function checkArray(elem){
     return Array.isArray(elem);
 }
 console.log(checkArray([]));
 console.log(checkArray({}));

 //3. How to empty an array in javascript ?

 var arr = [1,2,3,4,5,6];
arr.length = 0;
console.log(arr);


//4. How would you check is a number is an integer?

function integer(number){
    if(number%1 === 0){
        return console.log("Number is Integer");
    }
    else{
        return console.log("Number is not Integer");
    }
}
integer(4.6);


//5. Make this work :
// Problem: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

var arr2 = [1,2,3,4,5];
var duplicate = arr2.concat(arr2);
console.log(duplicate);


//6. write a javascript function that reverse a number?

function reverse(number){
    var str = number.toString().split(" ").reverse().join(" ");
    return Number(str);   
}
console.log(reverse(55200127));


//7. write a javascript function that checks wheather a passed string is palidrome or not?

function palidrome(word){
    var rev = word.split("").reverse().join("");
    if(rev === word){
        return console.log("It is a palidrome.");
    }
    else{
       return console.log("It is not a palidrome.");
    }
}

palidrome("nitin");
palidrome("Aman");

//8. Write a javascript function that returns a passed string with letter in alphabet order?

function alphabet(str){
   var order = str.split("").sort().join("");
   console.log(order);
}
alphabet("apple")


// 9. Write a javascript function that takes an array of numbers and returns a new array with only the even number?

function even(number){
    var evenNumber =  number.filter(num => num%2 ===0);
    console.log(evenNumber);
}
even([1,4,6,3,7,9,8]);

//10. Calculate the factorial of the given number?

function factorial(value){
    var ans = 1;
    for(var i = 1; i<=value;i++){
        ans = ans * i;
    }
    return ans;
}
console.log(factorial(5));

//11. find the largest number from the array?

function largestNumbar(value){
    var large =  Math.max(...value);
    return large;
}
console.log(largestNumbar([23,45,12,88,45,8]));


//12. Function to find the sum of all the numbers in an array?

function sum(arr){
    return arr.reduce((sum, num) => sum + num);
}
console.log(sum([1,3,5,2]));