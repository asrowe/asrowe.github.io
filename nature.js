var stage;
var world;

function defineWorld(){
	_world = [];
	
	var ball = {name:"ball",
				shape:"circle",
				x:100,
				y:100,
				dx:10,
				dy:0};
	
	_world.push(ball);
	return _world;
}

function buildWorld (){
	console.log("Building World...")
	for(let i=0; i< world.length; i++){
		console.log(w[i].name);
		var circle = new createjs.Shape();
    		circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		circle.x = world[i].x;
		circle.y = world[i].y;
		stage.addChild(circle);
	}
	stage.update();
}



function updateWorld(event) {
	for(let i=0; i<w.length; i++){
		world[i].x += world[i].dx;
		world[i].y += world[i].dy;
		if (world[i].x > stage.canvas.width) { world[i].x = 0; };
	}
	
	stage.update();
}
        
function init() {
	world = defineWorld();
	stage = new createjs.Stage("demoCanvas");
	
	buildWorld()
	
	createjs.Ticker.on("tick", updateWorld);
	createjs.Ticker.setFPS(30);
    
}
