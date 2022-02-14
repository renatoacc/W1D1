
/*for (let i = 0; i <= 15; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else{
        console.log(i);
    }
}*/

let value;
for (let i = 0; i <= 30; i++){

    value = i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : 
    i % 5 === 0 ? "Buzz" : i % 3 === 0 ? "Fizz" : i % 7 === 0 ? "Hello" : i;
    
    console.log(value);

}