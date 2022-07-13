window.onload = () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  let inLink = false;
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  let particleArray;
  const linkText = "/matter.html";

  //create constructor function
  function Particle(x, y, directionX, directionY, size, color, text) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.text = text;
  }

  //add draw method to particle prototype
  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.fillText("text", this.x, this.y, this.size);
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
      let size = 40;
      let x = Math.random() * (innerWidth - size * 2);
      let y = Math.random() * (innerHeight - size * 2);
      let directionX = Math.random() * 0.4 - 0.2;
      let directionY = Math.random() * 0.4 - 0.2;
      let color = "white";
      let text = "01";

      particleArray.push(
        new Particle(x, y, directionX, directionY, size, color, text)
      );
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }

    let linkX = particleArray[0].x,
      linkY = particleArray[0].y,
      linkWidth = 80,
      linkHeight = 80;

    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);

    //check if the mouse is over the link and change cursor style
    function on_mousemove(ev) {
      var x, y;

      // Get the mouse position relative to the canvas element.
      if (ev.layerX || ev.layerX == 0) {
        //for firefox
        x = ev.layerX;
        y = ev.layerY;
      }
      x += 40;
      y -= 40;

      //is the mouse over the link?
      if (
        x >= linkX &&
        x <= linkX + linkWidth &&
        y <= linkY &&
        y >= linkY - linkHeight
      ) {
        document.body.style.cursor = "pointer";
        inLink = true;
      } else {
        document.body.style.cursor = "";
        inLink = false;
      }
    }

    //if the link has been clicked, go to link
    function on_click() {
      if (inLink) {
        window.location = linkText;
      }
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
