
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING ="Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";
const location = "RSA";
const customers = 1;

let shipping;
let currency;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * (NONE_SELECTED);
let batteries = 35 * 2;
let pens = 5 * (NONE_SELECTED);

if (location === "RSA") {
  shipping = 400;
  currency = "R";
}

if (location === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 900;
  currency = "$";
}

if (shoes + batteries + pens + shirts > 1000) {
  if (location === "NAM" && customers < 2) {
    if (location === "RSA") {
      shipping = 0;
    }
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (location === "NK") {
  console.log(FREE_WARNING);
} else {
  console.log("price", currency, shoes + batteries + pens + shirts + shipping);
}
