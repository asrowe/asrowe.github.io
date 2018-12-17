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

function buildWorld (w, s){
	console.log("Building World...")
	for(let i=0; i< w.length; i++){
		console.log(w[i].name);
		var circle = new createjs.Shape();
    		circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		circle.x = w[i].x;
		circle.y = w[i].y;
		s.addChild(circle);
	}
	s.update();
}



function updateWorld(w,s) {
	//Circle will move 10 units to the right.
	circle.x += 10;
	
	//Will cause the circle to wrap back
	if (circle.x > stage.canvas.width) { circle.x = 0; }
	
	
	for(let i=0; i<w.length; i++){
		ob = w[i].x += w[i].dx;
		ob = w[i].y += w[i].dy;
		if (w[i].x > s.canvas.width) { w[i].x = 0; };
	}
	
	s.update();
}
        
function init() {
	world = defineWorld();
	
	stage = new createjs.Stage("demoCanvas");
	buildWorld(world,stage)
	
	createjs.Ticker.addEventListener("tick", updateWorld(world, stage));
    
}
