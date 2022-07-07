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
  const vector = Matter.Vector.create(0, 0.2);
  const vector1 = Matter.Vector.create(0.1, 0.3);
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
  });
  var ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight,
    window.innerWidth,
    40,
    {
      isStatic: true,
    }
  );

  console.log("circle1", circle1);
  // add all of the bodies to the world
  Composite.add(engine.world, [circle1, circle2, ground]);
  Matter.Body.applyForce(circle1, vector, vector1);

  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);
};
