// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
    let Arr = userInput[1].split(" ");
    let a = parseInt(userInput[0]);
    let b = parseInt(Arr[0]);
    let c = parseInt(Arr[1]);

    if(( a > b && a < c) || ( a > c && a < b ))
    {
        console.log('yes');
    }
    else
    {
        console.log('no');
    }
  //end-here
});
