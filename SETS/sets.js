let arr1 = [1, 3, 2, 4, 6];
let arr2 = [1, 20, 3, 6, 8, 90]

//Write a function that returns unique elements of the 2 array given above in form of an array.
function findEunique(arr1, arr2){
  let set = new Set(arr1.concat(arr2))
  console.log(set)
  //create a new Array using Array.from()
  return Array.from(set)
}
console.log(findEunique(arr1,arr2))

let animals = new Set();

animals.add('🐷');
animals.add('🐼');
animals.add('🐢');
animals.add('🐿');
console.log(animals.size); // 4
animals.add('🐼');
console.log(animals.size); // 4

console.log(animals.has('🐷')); // true
animals.delete('🐷');
console.log(animals.has('🐷')); // false

animals.forEach(animal => {
  console.log(`Hey ${animal}!`);
});

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
console.log(animals.size); // 0

let myAnimals = new Set(['🐷', '🐢', '🐷', '🐷']);

myAnimals.add(['🐨', '🐑']);
myAnimals.add({ name: 'Rud', type: '🐢' });
console.log(myAnimals.size); // 4

myAnimals.forEach(animal => {
  console.log(animal);
});


// 🐷
// 🐢
// ["🐨", "🐑"]
// Object { name: "Rud", type: "🐢" }

// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})
//forEach() calls a function for each element:

a
b
c
