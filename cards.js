// This file contains code to draw the cards and provide possible moves to the pieces.
/*
    Things this file needs to do:
      * Select 5 random cards at the beginning of the game.
      * Provide a function for each player to get their move set.
*/
var game_cards = {
    "red": [],
    "blue": [],
    "temp": {}
};

var cards = [
  {"shape": null, "name": "litten", "old_name": "tiger", "moves": [[0, -2], [0, 1]]},
  {"shape": null, "name": "litten", "old_name": "crab", "moves": [[-2, 0], [0, -1], [2, 0]]},
  {"shape": null, "name": "litten", "old_name": "monkey", "moves": [[-1, -1], [-1, 1], [1, -1], [1, 1]]},
  {"shape": null, "name": "litten", "old_name": "crane", "moves": [[-1, 1], [1, 1], [0, 1]]},
  {"shape": null, "name": "litten", "old_name": "dragon", "moves": [[-2, -1], [-1, 1], [1, 1], [2, -1]]},
  {"shape": null, "name": "litten", "old_name": "elephant", "moves": [[-1, 0], [-1, -1], [1, 0], [1, 1]]},
  {"shape": null, "name": "litten", "old_name": "mantis", "moves": [[-1, -1], [1, -1], [0, 1]]},
  {"shape": null, "name": "litten", "old_name": "boar", "moves": [[-1, 0], [0, -1], [1, 0]]},
  {"shape": null, "name": "litten", "old_name": "frog", "moves": [[-2, 0], [-1, -1], [1, 1]]},
  {"shape": null, "name": "litten", "old_name": "goose", "moves": [[-1, -1], [-1, 0], [1, 0], [1, 1]]},
  {"shape": null, "name": "litten", "old_name": "horse", "moves": [[-1, 0], [0, -1], [0, 1]]},
  {"shape": null, "name": "litten", "old_name": "eel", "moves": [[-1, -1], [-1, 1], [1, 0]]},
  {"shape": null, "name": "litten", "old_name": "rabbit", "moves": [[-1, 1], [1, -1], [2, 0]]},
  {"shape": null, "name": "litten", "old_name": "rooster", "moves": [[-1, 0], [-1, 1], [1, 0], [1, 1]]},
  {"shape": null, "name": "litten", "old_name": "ox", "moves": [[0, 1], [0, -1], [1, 0]]},
  {"shape": null, "name": "litten", "old_name": "cobra", "moves": [[-1, 0], [1, 1], [1, -1]]},
];

/**
 * Cribbed from stack overflow. https://stackoverflow.com/a/6274381
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function setup_cards() {
  shuffle(cards)
  for (var i = 0; i < 5; i++) {
    cards[i].shape = new createjs.Container();
    shape = new createjs.Shape();
    shape.name = "shape";
    cards[i].shape.addChild(shape);
    // cards[i].shape.getChildByName("shape").graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 0.5)").drawRect(0, 0, 400, 200);
    text = new createjs.Text(cards[i].name, "Arial 40px", "#000000");
    text.name = "text";
    cards[i].shape.addChild(text);
    stage.addChild(cards[i].shape);

    grid = new createjs.Shape();
    grid.graphics.beginBitmapFill(loader.getResult("litten")).drawRect(0, 0, 400, 200);
    cards[i].shape.addChild(grid);
  }
  cards[0].shape.rotation = 180;
  cards[0].shape.x = 800;
  cards[0].shape.y = 200;
  cards[1].shape.rotation = 180;
  cards[1].shape.x = 400;
  cards[1].shape.y = 200;
  game_cards["blue"] = [cards[0], cards[1]];
  game_cards["red"] = [cards[2], cards[3]];
  cards[2].shape.y = 1000;
  cards[3].shape.y = 1000;
  cards[3].shape.x = 400;
  cards[4].shape.y = 1200;
}
