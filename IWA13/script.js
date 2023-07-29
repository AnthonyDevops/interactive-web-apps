let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => {
  const isString = (calculated);
  const calculatedAsNumber = isString ? parseInt(calculated) : (calculated);
  calculated = calculatedAsNumber + 1;
};



const calcUser = () => {
  logCalc(); 
  if (calculated > 4) {user = 'John';
  } else if (calculated > 1) { state = 'idle'; 
  state = 'requesting';
  }
};

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
