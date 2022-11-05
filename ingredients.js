const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Using while loop to list:")
// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

console.log("Using for loop to list:")
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

console.log("Using for loop to list reversed:")
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i = 7; i >= 0; i--){
  console.log(ingredients[i]);
}

console.log("Using while loop to list versed:")
let x = 7
while (x >= 0){
  console.log(ingredients[x]);
  x--;
}