class Bird {
  fly() {
    console.log('Voando...');
  }
}

class Duck extends Bird {
  fly() {
    console.log('Pato voando...');
  }
}

class Eagle extends Bird {
  fly() {
    console.log('Águia voando...');
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const eagle = new Eagle();

makeBirdFly(duck);
makeBirdFly(eagle);
