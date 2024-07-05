function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const maxIterations = 5;
let iterations = 0;

while (true) {
  var enemy1 = "Enemy A"; // name of enemy 1
  var dist1 = randomNum(1, 100); // random distance to enemy 1 between 1 and 100
  var enemy2 = "Enemy B"; // name of enemy 2
  var dist2 = randomNum(1, 100); // random distance to enemy 2 between 1 and 100

  console.log(`Distancia de ${enemy1}: ${dist1}`);
  console.log(`Distancia de ${enemy2}: ${dist2}`);

  if (dist1 < dist2) {
    console.log("Enemy A");
  } else {
    console.log("Enemy B");
  }

  iterations++;
  if (iterations >= maxIterations) {
    break;
  }
}
