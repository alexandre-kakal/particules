window.onload = () => {
  // module aliases
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Events = Matter.Events;

  // create an engine
  let engine = Engine.create(),
    world = engine.world;
  engine.world.gravity.y = 0;
  engine.world.gravity.scale = 0;

  //constructor array output
  let vectorArray;

  // create a renderer
  let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
      background: "#fff",
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });

  //resize canvas when window is resized (attempt)
  window.addEventListener("resize", function () {
    render.canvas.attributes.nodeValue = window.innerWidth;
    render.options.height = innerHeight;
    Render.run(render);
  });

  // run the renderer
  Render.run(render);

  // create runner
  let runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  let staticOptions = {
    isStatic: true,
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
  };

  let circleOptionsv0 = {
    render: {
      fillStyle: "#fff",
      lineWidth: 8,
      strokeStyle: "#000",
      text: {
        content: "xo",
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

  let ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + 20,
    window.innerWidth,
    40,
    {
      isStatic: true,
    }
  );

  let left = Bodies.rectangle(
    -20,
    window.innerHeight / 2,
    40,
    window.innerHeight,
    staticOptions
  );

  let right = Bodies.rectangle(
    window.innerWidth + 20,
    window.innerHeight / 2,
    40,
    window.innerHeight,
    staticOptions
  );

  let top = Bodies.rectangle(
    window.innerWidth / 2,
    -20,
    window.innerWidth,
    40,
    staticOptions
  );

  let pro = Bodies.rectangle(800, window.innerHeight - 200, 250, 60, {
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

  function createParticle() {
    let result = new Array();
    let textArray = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
    ];
    let linkArray = [
      "https://google.com",
      "https://youtube.com",
      "https://github.com",
      "https://akarah.com",
      "https://stackoverflow.com",
      "https://abecedaire-studio.com",
      "https://brm.io",
      "https://www.sector32.net",
      "https://www.websitecarbon.com",
      "https://fr.reactjs.org",
    ];
    for (let i = 0; i < 10; i++) {
      let circleOptions = {
        render: {
          fillStyle: "#fff",
          lineWidth: 8,
          strokeStyle: "#000",
          text: {
            content: textArray[i],
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
        link: linkArray[i],
      };
      result[i] = Bodies.circle(
        Math.random() * (innerWidth - 40 * 2),
        Math.random() * (innerHeight - 40 * 2),
        40,
        circleOptions
      );
      Composite.add(world, [result[i]]);

      function createVector() {
        let position = new Array();
        let force = new Array();
        for (let i = 0; i < result.length; i++) {
          //create pair of vetor for each particle
          position[i] = Matter.Vector.create(
            Math.random() * 0.001 - 0.002,
            Math.random() * 0.002 - 0.003
          );
          force[i] = Matter.Vector.create(
            Math.random() * 0.001 - 0.002,
            Math.random() * 0.002 - 0.003
          );
          Matter.Body.applyForce(result[i], position[i], force[i]);
        }
      }
      createVector();
      setInterval(createVector, 15000);
    }

    console.log(result);
  }

  createParticle();

  // add all of static bodies to the world
  Composite.add(world, [ground, left, right, top, pro]);

  //set mouse and mouse constraint in order to redirect the user when he is clicking on a particle
  // add mouse control
  let mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
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

  Events.on(mouseConstraint, "mousedown", function (event) {
    let ball = mouseConstraint.body;

    if (!ball) return;
    window.location = ball.link;
  });
};
