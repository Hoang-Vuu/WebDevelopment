//Step 1
// 1.
const cube=(x)=> {
  return x * x * x;
}

// 2.
const fullName=(first, last)=> {
  return first + " " + last;
}

// 3.
const power=(base, exp)=> {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
const sumCubes=(numbers)=> {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

//Step 3
//1. 
let values = [10, 20, 30];

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
//2.
let lastLogin = '1/1/1970';

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}

console.log(welcome('Charlie', 'Munger'));
