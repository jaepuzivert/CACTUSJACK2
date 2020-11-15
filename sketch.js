

let particleSystem;

function setup() {
  createCanvas(480, 680);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(60);
  particleSystem.addParticle();
  particleSystem.run();
}
