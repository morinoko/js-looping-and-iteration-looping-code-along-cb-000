// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }

  return employees;
}

function tailsNeverFails() {
  function tailsFlip() {
    return Math.random() >= 0.5;
  }

  let tailsFlips = 0;

  while ( tailsFlip() ) {
    tailsFlip++;
  }

  return `You got #{tailsFlips} in a row!`;
}
