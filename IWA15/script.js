// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below
// firstlabel calls the first array in line 5 the data set and the 0 after data.list calls the first row in the array
// secondlabel calls the second array in line 6 the data set and the 1 after data.list calls the second row in the array
// thirdlabel calls the last array in line 7 the data set and the 2 after data.list calls the third row in the array
const [firstLabel, firstArray] = data.lists[0];
const [secondLabel, secondArray] = data.lists[1];
const [thirdLabel, thirdArray] = data.lists[2];

const result = [];

const extractBiggest = () => {
  const firstLastValue = firstArray[firstArray.length - 1] || -Infinity;
  const secondLastValue = secondArray[secondArray.length - 1] || -Infinity;
  const thirdLastValue = thirdArray[thirdArray.length - 1] || -Infinity;

  if (firstLastValue >= secondLastValue && firstLastValue >= thirdLastValue) {
    return firstArray.pop();
  }

  if (secondLastValue >= firstLastValue && secondLastValue >= thirdLastValue) {
    return secondArray.pop();
  }

  return thirdArray.pop();
};

for (let i = 0; i < 15; i++) {
  result.push(extractBiggest());
}



// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
