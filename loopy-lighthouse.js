/*
Challenge
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.

Start working on your program by writing a loop that prints out all the numbers from 100 to 200, inclusive. 
Only move on to the next step when that works.

Next, pick a condition you want to start with, for example printing out "Loopy" instead of multiples of 3. 
Figure out how you're going to check whether a number is a multiple of 3, then write your if statement. 

To verify that it works, consider calculating a few multiples of 3 by hand in a notebook (for example, 102, 105, 108, etc.), 
then making sure they're being replaced with "Loopy" in your output.
Repeat the previous step with your remaining conditions one at a time until they all work. 
It may help you be confident in your result if you've also calculated by hand a few multiples of 4 and a few of both 3 and 4.
*/

for (let x = 100; x <= 200; x++){
  if (x % 3 === 0 && x % 4 === 0){
    console.log("LoopyLighthouse");
  }
  else if (x % 3 === 0){
    console.log("Loopy");
  }
  else if (x % 4 === 0){
    console.log("Lighthouse");
  }
  else{
    console.log(x);
  }
}
