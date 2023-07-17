const leoName = "Leo ";
const leoSurname = "Musvaire ";
const leoBalance = "-9394";

const sarahName = "Sarah ";
const sarahSurname = "Kleinhans ";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed = ("R") + parseFloat(leoBalance*-1 + sarahBalance*-1).toLocaleString('en');
const leo = (leoName) + (leoSurname) + "(Owed: R" + (leoBalance) +")\n";
const sarah = (sarahName) + (sarahSurname) + "(Owed: R" + (sarahBalance)+")\n";
const total = "Total amount owed: ";
const result =leo + sarah + divider +"\n" + total + owed + "\n" + divider;


console.log(result);