const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = "0"
const minuteOfDay = "0"


// Only change below this line
let balance;

if (hourOfDay !== null && minuteOfDay !== null) {
  const taxAsDecimal = parseInt(tax,10) / 100;
  const startingAfterTax = salary * (1 - taxAsDecimal);
  balance = startingAfterTax - transport - food - rent;
}

console.log('R'+balance.toFixed(2));
// R274,05