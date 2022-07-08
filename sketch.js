window.onload = () => {
  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;
  engine.world.gravity.y = 0;
  engine.world.gravity.scale = 0;

  let link = "https://stackoverflow.com";
  let linkText = "Professionnels";
  var ctx = Render.context;
  let linkWidth;
  let inLink = false;

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

  const vector = Matter.Vector.create(
    Math.random() * 0.1 - 0.05,
    Math.random() * 0.005 - 0.00047
  );
  const vector1 = Matter.Vector.create(
    Math.random() * 0.1 - 0.0045,
    Math.random() * 0.00075 - 0.0025
  );
  const vector2 = Matter.Vector.create(
    Math.random() * 0.1 - 0.05,
    Math.random() * 0.005 - 0.00047
  );
  const vector3 = Matter.Vector.create(
    Math.random() * 0.1 - 0.05,
    Math.random() * 0.005 - 0.00047
  );

  console.log("render", render);
  // create two boxes and a ground
  var circle1 = Bodies.circle(400, 200, 40, {
    render: {
      fillStyle: "#fff",
      lineWidth: 8,
      strokeStyle: "#000",
      text: {
        content: "01",
        color: "black",
        size: 30,
        family: "sans-serif",
      },
    },
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
  });
  var circle2 = Bodies.circle(450, 50, 40, {
    render: {
      fillStyle: "#fff",
      lineWidth: 8,
      strokeStyle: "#000",
      text: {
        content: "02",
        color: "black",
        size: 30,
        family: "sans-serif",
      },
    },
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
  });
  var ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + 25,
    window.innerWidth,
    40,
    {
      isStatic: true,
    }
  );

  var left = Bodies.rectangle(
    -25,
    window.innerHeight / 2,
    40,
    window.innerHeight,
    {
      isStatic: true,
    }
  );

  var right = Bodies.rectangle(
    window.innerWidth + 25,
    window.innerHeight / 2,
    40,
    window.innerHeight,
    {
      isStatic: true,
    }
  );

  var top = Bodies.rectangle(
    window.innerWidth / 2,
    -25,
    window.innerWidth,
    40,
    {
      isStatic: true,
    }
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
  });

  console.log("circle1", circle1);
  // add all of the bodies to the world
  Composite.add(world, [circle1, circle2, ground, left, right, top, pro]);

  //attempt to add mouse contraints and use the canvas onmousemove option in order to set links in the canva

  /* // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: window.innerWidth, y: window.innerHeight },
  });

  //Add event with 'mousemove'
  Matter.Events.on(mouseConstraint, "mousemove", function (event) {
    //For Matter.Query.point pass "array of bodies" and "mouse position"
    var foundPhysics = Matter.Query.point(bodies, event.mouse.position);

    //Your custom code here
  }); */

  Matter.Body.applyForce(circle1, vector, vector1);
  Matter.Body.applyForce(circle2, vector2, vector3);

  console.log("pro", pro);
};
