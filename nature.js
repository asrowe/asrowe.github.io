var stage;
var circle;

function handleTick() {
	//Circle will move 10 units to the right.
	circle.x += 10;
	
	//Will cause the circle to wrap back
	if (circle.x > stage.canvas.width) { circle.x = 0; }
	
	stage.update();
}
        
function init() {
	stage = new createjs.Stage("demoCanvas");
	createjs.Ticker.addEventListener("tick", handleTick);
            
    circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
}
