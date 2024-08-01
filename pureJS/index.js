const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

// ball
const ballRadius = canvas.width / 100;
const ballX = canvas.width / 2;
const ballY = canvas.height - (canvas.height / 12);
const ballVelocity = 0.9;
const ballDx = ballRadius * ballVelocity;
const ballDy = -ballRadius * ballVelocity;

const ball = new Ball({position: {x: ballX, y: ballY}, 
                       velocity: {dx: ballDx, dy: ballDy},
                       size: {radius: ballRadius}, 
                       color: "#0095DD",
                       imageSrc: "baseball.png",
                      });

// paddle
const paddleWidth = canvas.width / 14;
const paddleHeight = canvas.height / 50;
const paddleX = (canvas.width - paddleWidth) / 2;
const paddleY = (canvas.height - paddleHeight) - 10;
const paddleVelocity = 0.3
const paddleDx = paddleWidth * paddleVelocity;
const paddle = new Paddle({ position: {x: paddleX, y: paddleY},
                            velocity: {dx: paddleDx, dy: 0},
                            size: {width: paddleWidth, height: paddleHeight},
                            color: "#0095DD",
                            keyPressed: keyPressed,
                          });
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// bricks
const brickWidth = canvas.width / 20;
const brickHeight = canvas.height / 40;
const brickRow = 3;
const brickColumn = canvas.width / brickWidth -1 ;
const brickPadding = brickWidth * 0.05;
const brickOffsetTop = canvas.height * 0.05;
const brickOffsetLeft = 5;

const bricks = new Bricks({ 
                            row: brickRow,
                            column: brickColumn,
                            padding: brickPadding,
                            offsetTop: brickOffsetTop,
                            offsetLeft: brickOffsetLeft,
                            size: {width: brickWidth, height: brickHeight},
                            color: "#0095DD",
                          });

function animate() {
  requestAnimationFrame(animate);

  // page refresh
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundDraw("black");

  drawScore(ball.score);
  if(ball.score == bricks.row * bricks.column) {
    alert("YOU WON!")
  }
  drawLives(ball.lives);
  ball.animate(paddle.position, paddle.size, bricks);
  bricks.animate();
  paddle.animate();
}

function startGame() {
  animate();
}

startGame();

document.getElementById("runButton").addEventListener("click", function () {
  ball.state = "run";
  this.disabled = true;
});