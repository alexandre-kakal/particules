window.onload = () => {
  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Events = Matter.Events;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;
  engine.world.gravity.y = 0;
  engine.world.gravity.scale = 0;

  //constructor array output
  let particleArray;
  let vectorArray;

  // create a renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
      background: "#fff",
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });

  //resize canvas when window is resized
  window.addEventListener("resize", function () {
    render.canvas.attributes.nodeValue = window.innerWidth;
    render.options.height = innerHeight;
    Render.run(render);
  });

  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  /*  //create a constructor function
  function Particle(x, y, position, force, radius, options) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.options = options;
    this.position = position;
    this.force = force;
  }

  function init() {
    let particleArray = [];
    for (let i = 0; i < 10; i++) {
      let radius = 40;
      let x = Math.random() * (innerWidth - radius);
      let y = Math.random() * (innerHeight - radius);
      let position = Matter.Vector.create(
        Math.random() * 0.1 - 0.05,
        Math.random() * 0.005 - 0.00047
      );
      let force = Matter.Vector.create(
        Math.random() * 0.1 - 0.05,
        Math.random() * 0.005 - 0.00047
      );
      let index = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
      let curentIndex = index[i];
      let options = {
        render: {
          fillStyle: "#fff",
          lineWidth: 8,
          strokeStyle: "#000",
          text: {
            content: curentIndex,
            color: "black",
            size: 30,
            family: "sans-serif",
          },
        },
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
      };

      particleArray.push(new Particle(x, y, position, force, radius, options));
    }
  }

  console.log("array", particleArray); */

  let circleOptions = {
    render: {
      fillStyle: "#fff",
      lineWidth: 8,
      strokeStyle: "#000",
      text: {
        content: "xx",
        color: "black",
        size: 30,
        family: "sans-serif",
      },
    },
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 1,
    inertia: Infinity,
    inverseInertia: Infinity,
    angularSpeed: 1,
    angularVelocity: 1,
  };

  let staticOptions = {
    isStatic: true,
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
  };

  console.log("world", world);
  console.log("render", render);
  // create two boxes and a ground

  /*  function generateParticles(){
    let particleArray = [];
    let content = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
    for ( let i =0; i<10; i++){
      var circle[i]= Bodies.circle(
        Math.random() * (innerWidth - 40 * 2),
        Math.random() * (innerHeight - 40 * 2),
        40,
        circleOptions
      );

      particleArray.push(circle[i]);
    }
  } */

  var circle1 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    { ...circleOptions, link: "https://youtube.com" }
  );
  var circle2 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );

  var circle3 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );

  var circle4 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );
  var circle5 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );
  var circle6 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );
  var circle7 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );

  var circle8 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );

  var circle9 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );

  var circle10 = Bodies.circle(
    Math.random() * (innerWidth - 40 * 2),
    Math.random() * (innerHeight - 40 * 2),
    40,
    circleOptions
  );

  var ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + 20,
    window.innerWidth,
    40,
    {
      isStatic: true,
    }
  );

  var left = Bodies.rectangle(
    -20,
    window.innerHeight / 2,
    40,
    window.innerHeight,
    staticOptions
  );

  var right = Bodies.rectangle(
    window.innerWidth + 20,
    window.innerHeight / 2,
    40,
    window.innerHeight,
    staticOptions
  );

  var top = Bodies.rectangle(
    window.innerWidth / 2,
    -20,
    window.innerWidth,
    40,
    staticOptions
  );

  var pro = Bodies.rectangle(800, window.innerHeight - 200, 250, 60, {
    isStatic: true,
    render: {
      fillStyle: "#fff",
      lineWidth: 8,
      strokeStyle: "#000",
      text: {
        content: "Professionnels",
        color: "black",
        size: 30,
        family: "sans-serif",
      },
    },
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
  });

  // add all of the bodies to the world
  Composite.add(world, [
    circle1,
    circle2,
    circle3,
    circle4,
    circle5,
    circle6,
    circle7,
    circle8,
    circle9,
    circle10,
    ground,
    left,
    right,
    top,
    pro,
  ]);

  //attempt to add mouse contraints and use the canvas onmousemove option in order to set links in the canva

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: {
          visible: false,
        },
      },
    });

  Composite.add(world, mouseConstraint);

  let canvasel = render.canvas;

  console.log("canvas el", canvasel);
  console.log("circle1", circle1);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: window.innerWidth, y: window.innerHeight },
  });

  console.log("mouseConstraint", mouseConstraint);

  //Add event with 'mousemove'
  //Matter.Events.on(mouseConstraint, "mousemove", function (event) {
  //For Matter.Query.point pass "array of bodies" and "mouse position"
  //var foundPhysics = Matter.Query.point(bodies, event.mouse.position);

  //Your custom code here
  //});

  /* class vector {
    constructor(position, force) {
      this.position = position;
      this.force = force;
    }
  }

  function createVector() {
    vectorArray = [];
    for (let i = 0; i < 10; i++) {
      let position = Math.random() * 0.01 - 0.02;
      let force = Math.random() * 0.02 - 0.03;
      vectorArray.push = new vector(position, force);
    }
  }

  console.log("vectorArray", vectorArray);

  createVector(); */

  const vector0 = Matter.Vector.create(
    Math.random() * 0.01 - 0.02,
    Math.random() * 0.02 - 0.03
  );
  const vector1 = Matter.Vector.create(
    Math.random() * 0.01 - 0.02,
    Math.random() * 0.02 - 0.03
  );
  const vector2 = Matter.Vector.create(
    Math.random() * 0.01 - 0.05,
    Math.random() * 0.05 - 0.04
  );
  const vector3 = Matter.Vector.create(
    Math.random() * 0.001 - 0.005,
    Math.random() * 0.005 - 0.0047
  );
  const vector4 = Matter.Vector.create(
    Math.random() * 0.001 - 0.002,
    Math.random() * 0.002 - 0.003
  );
  const vector5 = Matter.Vector.create(
    Math.random() * 0.001 - 0.002,
    Math.random() * 0.002 - 0.003
  );
  const vector6 = Matter.Vector.create(
    Math.random() * 0.001 - 0.005,
    Math.random() * 0.005 - 0.004
  );
  const vector7 = Matter.Vector.create(
    Math.random() * 0.001 - 0.005,
    Math.random() * 0.005 - 0.003
  );
  const vector8 = Matter.Vector.create(
    Math.random() * 0.001 - 0.002,
    Math.random() * 0.002 - 0.003
  );
  const vector9 = Matter.Vector.create(
    Math.random() * 0.001 - 0.002,
    Math.random() * 0.002 - 0.003
  );

  function applyForceOnBodies() {
    Matter.Body.applyForce(circle1, vector0, vector0);
    Matter.Body.applyForce(circle2, vector1, vector1);
    Matter.Body.applyForce(circle3, vector2, vector2);
    Matter.Body.applyForce(circle4, vector3, vector3);
    Matter.Body.applyForce(circle5, vector4, vector4);
    Matter.Body.applyForce(circle6, vector5, vector5);
    Matter.Body.applyForce(circle7, vector6, vector6);
    Matter.Body.applyForce(circle8, vector7, vector7);
    Matter.Body.applyForce(circle9, vector8, vector8);
    Matter.Body.applyForce(circle10, vector9, vector9);
  }

  applyForceOnBodies();

  setInterval(applyForceOnBodies, 15000);

  Events.on(mouseConstraint, "mousedown", function (event) {
    let ball = mouseConstraint.body;

    if (!ball) return;
    window.location = ball.link;
  });
};

//how to set links using both mouse and bodies coordinates :
//var ctx = render.canvas;
let link = "/index.html";
let linkWidth = 40;
let linkHeight = 40;
let inLink = false;

//add mouse listeners

//check if the mouse is over the link and change cursor style
// get the mouse position relative to the canvas element
// check if the mouse is over the link
//true => inLink = true;
//false => inlink = false;

//if inLink true => go to the link : window.location = link;

/*
- synch the mouse position to the canva with onmousemove (almost done ? check mouse variable)
- check if the mouse is over the link and change cursor style
- if the link has been clicked, go to link

for moving links (particles):
- set x and y links coordinates equal to their particles coordinates

*/
