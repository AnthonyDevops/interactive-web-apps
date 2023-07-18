// Overview of IWA9 challenge 1
// Subtract the taxable amount from the salary before calculating expenses. The total should be the after-tax amount minus all expenses.
//  However, there are differences in functionality: expenses are grouped in an object, and a tax object with various reference codes 
// is used for different tax amounts.
//  We will use 913 for rent. The rent key is created by combining loading types and sizes,
//  and can be interpolated with the size and lodging variables. Use the key's number as the rent amount.
//  Don't worry about spaces or formatting, just log it as a single rounded value.
//  Final console value: 2658.05 





// We declare and assign values to the salary,lodging and size variables.
// The salary variable represents monthly income, while lodging and size
// respresents type and size of the accommodation.

const salary = 4000;
const lodging = "apartment";
const size = "large";

// We declare and assign values the expense object.
// It contains two properties Food and Transport.
// Representing the amount spent on food and transportation.

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

// We declare and assign values to the tax object.
// It contains different tax rates based on specific income ranges.
// The keys represent the income ranges.
// The values represent the corresponding tax rates.

const tax = {
  734: "3%",
  234: "20%",
  913: "12%",
  415: "38%",
  502: "42%",
};

// We declare and assign values to the rent object.
// It contains different types of accommodation options.
// It contains their corresponding monthly rent amounts.

const rent = {
  none: 0,
  "small-room": 200,
  "large-room": 300,
  "small-apartment": 400,
  "large-apartment": 800,
  "small-house": 1200,
  "large-house": 2400,
};

// You can change below however you want

// taxAsDecimal calculates the tax rate as a decimal by accessing the tax rate,
// corresponding to the income range of 913 from the tax object and converting it,
// to a decimal.

// startingAfterTax calculates the income after deducting the tax amount by multiplying
// the salary with the tax rate as a decimal

// Const type concatenates the lodging and size variables to represent the type of accommodation.
// Const balance calculates the balance by subtracting the expenses for food and transport,
// from the monthly rent of a large apartment.
// Console.log logs the balance varaible to the console

const taxAsDecimal = parseFloat(tax[913]) /100;
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = lodging + size;
const balance = startingAfterTax - expenses.transport - expenses.food - rent['large-apartment'];
console.log(balance.toFixed(2));
// 2658.05
