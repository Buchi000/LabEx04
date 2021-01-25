let choice;

let numbers_array = new Array();


function sumArray(array){
    sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + Number(array[i]);
    }

    return sum;
}
function multiArray(array){
    multiplication = 1
    for (let i = 0; i < array.length; i++) {
        multiplication = multiplication * Number(array[i]);
}
return multiplication;
}

function multiArray(array){
    multiplication = 1
    for (let i = 0; i < array.length; i++) {
        multiplication = multiplication * Number(array[i]);
}
return multiplication;
}
function subtract(x, y){
    return Number(x) - Number(y);
}
 function division (x, y){
     if(y == 0){
         return "Error b/c denominator can't be zero"
     }
     else{
         return Number(x)/Number(y)
     }
 }
 function findSquare(number) {
    return number*number;
}



(function() {
    choice = prompt("Which of the following operations would you like to perform \n"
    + "1. Addition \n"
    + "2. Multiplication \n"
    + "3. Subtraction \n"
    + "4. Division \n"  
    + "5. Find square of a number");
    if (choice == "1" || choice=="2" ){
      let allNums = prompt("How many numbers do you want to operating?")
  
    for (let i = 0; i < parseInt(allNums); i++) {
      numbers_array[i] = prompt("Enter number " + (i+1) + ": ");
  }

  if(choice == "1"){
      console.log("result is " + sumArray(numbers_array))
  }
  if(choice == "2"){
      console.log("result is " + multiArray(numbers_array))
  }
}
if(choice =="3"){
    x = prompt("Enter the first number ");
    y = prompt("Enter the second number ")
    console.log("result is " + subtract(x, y))

}
if(choice == "4"){
    x = prompt("Enter the first number ");
    y = prompt("Enter the second number ")
    console.log("result is " + division(x, y))
}
if(choice== "5"){
    number = prompt("Enter number you want to find square of: ");
        console.log('Result: ' + findSquare(number));
}

})();