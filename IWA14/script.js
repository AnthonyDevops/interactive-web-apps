// The following code provides three values as variables, and 
// creates a function called logTwice. The logTwice function 
// should take a provided parameter and log it two times. The expected output is:

//  Hello, John (35). I love coding!

// Hello, John (35). I love coding!

//  Unfortunately at the moment went attempting to run the code the following error is returned:

//  hobby is not a function




// Variables was not defined

const firstName = "John";
const age = 35;
const hobby = "Coding";

// No parameter was defined to log firstname twice
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};
// The function name was reclared throughout the code
// The name variable was undefined and needed to be renamed to firstname
function ola(hobby) {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

ola(hobby);