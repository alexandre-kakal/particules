window.onload = () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  let particleArray;

  //create constructor function
  function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  //add draw method to particle prototype
  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 5;
  };

  // add uptade method to particle prototype
  Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }

    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  };

  //create particle array
  function init() {
    particleArray = [];
    for (let i = 0; i < 10; i++) {
      let size = 50;
      let x = Math.random() * (innerWidth - size * 2);
      let y = Math.random() * (innerHeight - size * 2);
      let directionX = Math.random() * 0.4 - 0.2;
      let directionY = Math.random() * 0.4 - 0.2;
      let color = "white";

      particleArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
  }

  init();
  animate();
  console.log(particleArray);

  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });
};
