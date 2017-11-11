
var stage, w, h, loader;
var board;

function init() {
	stage = new createjs.Stage("gameCanvas");
  stage.width = window.width;
	// grab canvas width and height for later calculations:
	w = stage.canvas.width;
	h = stage.canvas.height;

	manifest = [
		{src: "board.png", id: "board"},
    {src: "red_ball.png", id: "red_pawn"},
    {src: "red_king.png", id: "red_king"},
    {src: "blue_ball.png", id: "blue_pawn"},
    {src: "blue_king.png", id: "blue_king"},
    {src: "litten.png", id: "litten"},
    {src: "dragonite.png", id: "dragonite"},
    {src: "paras.png", id: "paras"},
    {src: "koffing.png", id: "koffing"},
    {src: "pinsir.png", id: "pinsir"},
    {src: "zapdos.png", id: "zapdos"},
    {src: "froakie.png", id: "froakie"},
    {src: "mrmime.png", id: "mrmime"},
    {src: "eevee.png", id: "eevee"},
    {src: "abra.png", id: "abra"},
    {src: "dodrio.png", id: "dodrio"},
    {src: "exeggutor.png", id: "exeggutor"},
    {src: "hitmonlee.png", id: "hitmonlee"},
    {src: "haunter.png", id: "haunter"},
    {src: "tauros.png", id: "tauros"},
    {src: "gogoat.png", id: "gogoat"},


    // {src: "red_highlight.png", id: "red_highlight"},
    // {src: "blue_highlight.png", id: "blue_highlight"},
	];

	loader = new createjs.LoadQueue(false);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest, true, "/onitama/images/");
}

function handleComplete() {
	board = new createjs.Shape();
	board.graphics.beginBitmapFill(loader.getResult("board")).drawRect(0, 0, 800, 800);
  board.y = 200;
	//By default swapping between Stage for StageGL will not allow for vector drawing operation such as BitmapFill, useless you cache your shape.
	// board.cache(0, 0, w, h);

    // var groundImg = loader.getResult("ground");
    // ground = new createjs.Shape();
    // ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, groundImg.height);
    // ground.tileW = groundImg.width;
    // ground.y = h - groundImg.height;
    // //By default swapping between Stage for StageGL will not allow for vector drawing operation such as BitmapFill, useless you cache your shape.
    // ground.cache(0, 0, w + groundImg.width, groundImg.height);

	// var spriteSheet = new createjs.SpriteSheet({
	// 		framerate: 30,
	// 		"images": [loader.getResult("grant")],
	// 		"frames": {"regX": 82, "height": 292, "count": 64, "regY": 0, "width": 165},
	// 		// define two animations, run (loops, 1.5x speed) and jump (returns to run):
	// 		"animations": {
	// 			"run": [0, 25, "run", 1.5],
	// 			"jump": [26, 63, "run"]
	// 		}
	// 	});
	// grant = new createjs.Sprite(spriteSheet, "run");
	// grant.y = 35;

	stage.addChild(board);
	// stage.addEventListener("stagemousedown", handleJumpStart);

	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener("tick", tick);
}


function tick(event) {
	var deltaS = event.delta / 1000;
	// var position = grant.x + 150 * deltaS;

	// var grantW = grant.getBounds().width * grant.scaleX;
	// grant.x = (position >= w + grantW) ? -grantW : position;
  //
	// ground.x = (ground.x - deltaS * 150) % ground.tileW;
	// hill.x = (hill.x - deltaS * 30);
	// if (hill.x + hill.image.width * hill.scaleX <= 0) {
	// 	hill.x = w;
	// }
	// hill2.x = (hill2.x - deltaS * 45);
	// if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
	// 	hill2.x = w;
	// }

	stage.update(event);
}
