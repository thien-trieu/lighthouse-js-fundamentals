/* We've been working with a pop idol on a new song, and to make sure it's a bonafide ear worm, 
the label wants us to repeat the chorus ten times at the end of the song. Wanting to practice some JavaScript, 
we decide to write a while loop to print out the chorus ten times.


const chorus = "Let's dance!";
let repeat = 0 // start

while (repeat < 10){ // stop
  console.log(chorus);
  repeat++; // step can also be written: repeat = repeat + 1;
}

console.log("Until the sun comes up!")

*/
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

/* 
Here, before printing the chorus for the sixth time (sixth because we've started counting at 0, not 1), 
we also instruct our pop star to change key before continuing. 
This works because the value of repeat will be equal to 5 only once—on the sixth iteration of our loop.
*/