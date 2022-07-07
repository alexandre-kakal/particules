window.onload = () => {
  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

  // create an engine
  var engine = Engine.create();
  engine.world.gravity.y = 0;
  engine.world.gravity.scale = 0;
  const vector = Matter.Vector.create(
    Math.random() * 0.4 - 0.2,
    Math.random() * 0.4 - 0.2
  );
  const vector1 = Matter.Vector.create(
    Math.random() * 0.4 - 0.2,
    Math.random() * 0.4 - 0.2
  );
  const vector2 = Matter.Vector.create(
    Math.random() * 0.4 - 0.2,
    Math.random() * 0.4 - 0.2
  );
  const vector3 = Matter.Vector.create(
    Math.random() * 0.4 - 0.2,
    Math.random() * 0.4 - 0.2
  );
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

  console.log("circle1", circle1);
  // add all of the bodies to the world
  Composite.add(engine.world, [circle1, circle2, ground, left, right, top]);
  Matter.Body.applyForce(circle1, vector, vector1);
  Matter.Body.applyForce(circle2, vector2, vector3);

  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);
};
