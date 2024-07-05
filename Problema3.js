function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const maxIterations = parseInt(
  prompt("Ingresa el número de veces que quieres que funcione el radar")
);
let iterations = 0;

while (true) {
  var enemy1 = "Enemy A";
  var dist1 = randomNum(1, 100);
  var enemy2 = "Enemy B";
  var dist2 = randomNum(1, 100);

  console.log(`Distancia de ${enemy1}: ${dist1}`);
  console.log(`Distancia de ${enemy2}: ${dist2}`);

  if (dist1 < dist2) {
    console.log("Enemy A se encuentra más cerca");
  } else {
    console.log("Enemy B se encuentra más cerca");
  }

  iterations++;
  if (iterations >= maxIterations) {
    break;
  }
}
