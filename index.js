// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }

  return employees;
}

function flipCoin() {
  if (Math.random() >= 0.5) {
    return "Tails";
  } else {
    return "Heads";
  }
}

function tailsNeverFails() {
  let tailsFlips = 0;

  while ( flipCoin() == 'Tails' ) {
    tailsFlips++;
  }

  return `You got ${tailsFlips} tails in a row!`;
}
