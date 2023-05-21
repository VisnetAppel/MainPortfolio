let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnersAge = 19;

if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnersAge > 18) {
  console.log(`The number ${raceNumber} will start at 9:30`);
} else if (registeredEarly === false && runnersAge > 18) {
  console.log(`The number ${raceNumber} will start at 11:00`);
} else if (runnersAge < 18) {
  console.log(`The number ${raceNumber} will start at 12:30`);
} else {
  console.log(`Please see the registration desk`);
}