const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i ++) {
    let name = names[i];
    if (name === "Waldo") {
      found(); // execute callback //this "outputs" found as (i)?? 
    }
  }
};

const actionWhenFound = function(i) {
  console.log("Found him at " + i + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)