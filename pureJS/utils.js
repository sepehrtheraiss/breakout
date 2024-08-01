function backgroundDraw(color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}

const keyPressed = {
    right: false,
    left: false,
    enter: false,
}

function keyDownHandler(e) {
    console.log(e);
    if (e.key == "Enter" || e.keyCode == 13) {
        keyPressed.enter = !keyPressed.enter;
        if(keyPressed.enter) {
            ball.state = "run";
        } else {
            ball.state = "pause"; 
        }
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
        keyPressed.right = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        keyPressed.left = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        keyPressed.right = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        keyPressed.left = false;
    }
}

function drawScore(score) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives(lives) {
ctx.font = "16px Arial";
ctx.fillStyle = "#0095DD";
ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}