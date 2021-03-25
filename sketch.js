var movingRect, fixedRect;

function setup() {
    createCanvas(1200, 800);

    fixedRect = createSprite(200, 300, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;

    movingRect = createSprite(200, 300, 80, 30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;



}

function draw() {
    background(0);

    movingRect.x = mouseX;
    movingRect.y = mouseY;

    if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
        fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
        movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
        fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2) {

        movingRect.shapeColor = "blue";
        fixedRect.shapeColor = "blue";

    } else {

        movingRect.shapeColor = "green";
        fixedRect.shapeColor = "green";

    }

    drawSprites();
}