var ballpit = [];

ballpit.push(new Ball(100,100));
ballpit.push(new Ball(75,250));
ballpit.push(new Ball(200,200));
ballpit.push(new Ball(10, 10));

ballpit[0].speed.x = 2;
ballpit[0].speed.y = 3;

ballpit[1].speed.x = 5;
ballpit[1].speed.y = 5;

ballpit[2].speed.x = 10;
ballpit[2].speed.y = 10;

// Any additional balls that aren't given a specific speed like above, will move at the speed set in ball.js: this.speed = {x: 1, y: 1};


//var myBall = new Ball(100, 100);
//myBall.speed.x = 2;
//myBall.speed.y = 2;

//var mySecondBall = new Ball(75, 250);

//var myThirdBall = new Ball(200, 200);

setup = function () {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  ballpit.forEach(function updateAndDisplay(ball) {
    ball.update();
    ball.display();
});

  //myBall.update();
  //myBall.display();

  //mySecondBall.update();
  //mySecondBall.display();

  //myThirdBall.update();
  //myThirdBall.display();

};
