// querySelector: This method is used to select an element in the HTML document based on a CSS selector. 
// It returns the first element that matches the selector. 
// In our code, we use document.querySelector('[data-key="order1"]') to select the element with the data attribute data-key="order1".
// Get the elements containing the data attributes for Order 1
const order1Root = document.querySelector('[data-key="order1"]');
const biscuits1 = order1Root.querySelector(".biscuits .count");
const donuts1 = order1Root.querySelector(".donuts .count");
const pancakes1 = order1Root.querySelector(".pancakes .count");
const status1 = order1Root.querySelector(".status dd");

// Get the elements containing the data attributes for Order 2
const order2Root = document.querySelector('[data-key="order2"]');
const biscuits2 = order2Root.querySelector(".biscuits .count");
const donuts2 = order2Root.querySelector(".donuts .count");
const pancakes2 = order2Root.querySelector(".pancakes .count");
const status2 = order2Root.querySelector(".status dd");

// Get the elements containing the data attributes for Order 3
const order3Root = document.querySelector('[data-key="order3"]');
const biscuits3 = order3Root.querySelector(".biscuits .count");
const donuts3 = order3Root.querySelector(".donuts .count");
const pancakes3 = order3Root.querySelector(".pancakes .count");
const status3 = order3Root.querySelector(".status dd");

// getAttribute: This method is used to retrieve the value of a specified attribute on the selected element.
//  In our code, we use order1Root.getAttribute("data-biscuits") to get the value of the data-biscuits attribute on the order1Root element.

// Update the content of each element with the data attributes
biscuits1.textContent = order1Root.getAttribute("data-biscuits");
donuts1.textContent = order1Root.getAttribute("data-donuts");
pancakes1.textContent = order1Root.getAttribute("data-pancakes");
status1.textContent =
  order1Root.getAttribute("data-delivered") === "true"
    ? "Delivered"
    : "Pending";


// textContent: This property is used to set or retrieve the text content of an element.
//  In our code, we use biscuits1.textContent = order1Root.getAttribute("data-biscuits") to set the text content of the biscuits1 element to the value of the data-biscuits attribute.
biscuits2.textContent = order2Root.getAttribute("data-biscuits");
donuts2.textContent = order2Root.getAttribute("data-donuts");
pancakes2.textContent = order2Root.getAttribute("data-pancakes");
status2.textContent =
  order2Root.getAttribute("data-delivered") === "true"
    ? "Delivered"
    : "Pending";

biscuits3.textContent = order3Root.getAttribute("data-biscuits");
donuts3.textContent = order3Root.getAttribute("data-donuts");
pancakes3.textContent = order3Root.getAttribute("data-pancakes");
status3.textContent =
  order3Root.getAttribute("data-delivered") === "true"
    ? "Delivered"
    : "Pending";
