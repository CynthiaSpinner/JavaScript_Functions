console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) count = count * -1;
  for (let i = 0; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
printOdds(-18);
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you're still a child`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge("Cynthia", 14);

console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
  if (x < 0 && y > 0) {
    console.log(`${x}, ${y} is Quadrant II`);
  } else if (x < 0 && y < 0) {
    console.log(`${x}, ${y} is Quadrant III`);
  } else if (x > 0 && y > 0) {
    console.log(`${x}, ${y} is Quadrant I`);
  } else if (x > 0 && y < 0) {
    console.log(`${x}, ${y} is Quadrant IV`);
  } else if (x == 0 && y != 0) {
    console.log(`${x}, ${y} is on the y-axis`);
  } else {
    console.log(`${x}, ${y} is on the x-axis`);
  }
}

whichQuadrant(-8, 0);

console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(side1, side2, side3) {
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    console.log(`${side1}, ${side2}, ${side3} is and invalid triangle`);
  } else if (side1 == side2 && side1 == side3) {
    console.log(`${side1}, ${side2}, ${side3} is an equilateral triangle`);
  } else if (
    (side1 == side2 && side1 != side3) ||
    (side2 == side3 && side2 != side1) ||
    (side3 == side1 && side3 != side2)
  ) {
    console.log(`${side1}, ${side2}, ${side3} is an isosceles triangle`);
  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
    console.log(`${side1}, ${side2}, ${side3} is a scalene triangle`);
  }
}

typeOfTriangle(42, 24, 30);
console.log("Bonus: EXERCISE 5:\n==========\n");

function planStatus(planLimit, day, usage) {
  //planLimit / 30 = x
  // usage / days
  let dailyUse = Math.round((usage / day) * 10 ** 2) / 10 ** 2; // same as below
  let dailyLimit = Math.round((planLimit / 30) * 10 ** 2) / 10 ** 2; //find math.round(midpoint, 2) in javascript?
  let remain = day - 30;
  if (dailyUse <= dailyLimit) {
    console.log(`${day} days used, ${remain} days remaining. \n Average daily use ${dailyUse} GB/day), \n
         Your under/ at your daily limit of ${dailyLimit} `);
  } else if (dailyUse > dailyLimit) {
    console.log(`${day} days used, ${remain} days remaining. \n Average daily use ${dailyUse} GB/day), \n
         Your exceeding your daily limit of ${dailyLimit} by ${
      Math.round((dailyLimit - dailyUse) * 10 ** 2) / 10 ** 2
    }`);
  }
}

planStatus(100, 15, 56);

let findRound = 2.005;

console.log(Math.round(findRound * 10 ** 2) / 10 ** 2);


