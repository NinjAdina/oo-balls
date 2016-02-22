var ballpit = [];

var updateAndDisplay = function(ball) {
  ball.update();
  ball.display();
};

setup = function() {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  ballpit.forEach(updateAndDisplay);
  //iterateFunctionally(ballpit);
  //iterateWithWhileLoop(ballpit);
  //iterateWithForLoop(ballpit);
  if (mouseIsPressed) ballpit.push(new Ball(mouseX, mouseY));
};

var iterateFunctionally = function (array) {
  array.forEach(updateAndDisplay);
};

var iterateWithWhileLoop = function (array) {
  var index = 0;
  while (index < array.length) {
    ballpit[index].update();
    ballpit[index].display();
    ++index; // index += 1; index = index +1;
  }
};

var iterateWithForLoop = function (array) {
  for (var index = 0; index < array.length; ++i) {
    // updateAndDisplay(array[i]); // i = index
    ballpit[index].update();
    ballpit[index].display();
  }
};
