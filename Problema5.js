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
  var priority1 = randomNum(1, 3);
  var speed1 = randomNum(10, 50);

  var enemy2 = "Enemy B";
  var dist2 = randomNum(1, 100);
  var priority2 = randomNum(1, 3);
  var speed2 = randomNum(10, 50);

  console.log(
    `Distancia de ${enemy1}: ${dist1}, Prioridad: ${priority1}, Velocidad: ${speed1}`
  );
  console.log(
    `Distancia de ${enemy2}: ${dist2}, Prioridad: ${priority2}, Velocidad: ${speed2}`
  );

  if (priority1 > priority2) {
    console.log(`Atacar a ${enemy1}`);
  } else if (priority2 > priority1) {
    console.log(`Atacar a ${enemy2}`);
  } else {
    if (dist1 < dist2) {
      console.log(`Atacar a ${enemy1}`);
    } else if (dist2 < dist1) {
      console.log(`Atacar a ${enemy2}`);
    } else {
      if (speed1 > speed2) {
        console.log(`Atacar a ${enemy1}`);
      } else if (speed2 > speed1) {
        console.log(`Atacar a ${enemy2}`);
      }
    }
  }

  iterations++;
  if (iterations >= maxIterations) {
    break;
  }
}
