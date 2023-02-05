const findWaldo = function(names, found) {
  names.forEach(function(value, index) {
    if (value === "Waldo") {
      found(index);
    }
  })
};

const actionWhenFound = function(index) {
    console.log("Found him at " + index + "!");
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)


// First excercise with for loop
/*
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i ++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i); // execute callback //this "outputs" found as (i)?? 
    }
  }
};

const actionWhenFound = function(i) {
  console.log("Found him at " + i + "!");
};
*/