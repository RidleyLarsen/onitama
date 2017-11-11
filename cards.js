// This file contains code to draw the cards and provide possible moves to the pieces.
/*
    Things this file needs to do:
      * Select 5 random cards at the beginning of the game.
      * Provide a function for each player to get their move set.
*/
var active_card;

var game_cards = {
    "red": [],
    "blue": [],
    "temp": {}
};

var cards = [
  {
    "shape": null,
    "name": "litten",
    "old_name": "tiger",
    "moves": {
      "red": [[0, -2], [0, 1]],
      "blue": [[0, -1], [0, 2]],
    }
  },
  {
    "shape": null,
    "name": "paras",
    "old_name": "crab",
    "moves": {
      "red": [[-2, 0], [0, -1], [2, 0]],
      "blue": [[2, 0], [0, 1], [-2, 0]],
    }
  },
  {
    "shape": null,
    "name": "koffing",
    "old_name": "monkey",
    "moves": {
      "red": [[-1, -1], [-1, 1], [1, -1], [1, 1]],
      "blue": [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    }
  },
  {
    "shape": null,
    "name": "litten",
    "old_name": "crane",
    "moves": {
      "red": [[-1, 1], [1, 1], [0, 1]],
      "blue": [[1, -1], [-1, -1], [0, -1]],
    }
  },
  {
    "shape": null,
    "name": "dragonite",
    "old_name": "dragon",
    "moves": {
      "red": [[-2, -1], [-1, 1], [1, 1], [2, -1]],
      "blue": [[2, 1], [1, -1], [-1, -1], [-2, 1]],
    }
  },
  {
    "shape": null,
    "name": "pinsir",
    "old_name": "elephant",
    "moves": {
      "red": [[-1, 0], [-1, -1], [1, 0], [1, -1]],
      "blue": [[1, 0], [1, 1], [-1, 0], [-1, 1]],
    }
  },
  {
    "shape": null,
    "name": "zapdos",
    "old_name": "mantis",
    "moves": {
      "red": [[-1, -1], [1, -1], [0, 1]],
      "blue": [[1, 1], [-1, 1], [0, -1]],
    }
  },
  {
    "shape": null,
    "name": "litten",
    "old_name": "boar",
    "moves": {
      "red": [[-1, 0], [0, -1], [1, 0]],
      "blue": [[1, 0], [0, 1], [-1, 0]],
    }
  },
  {
    "shape": null,
    "name": "froakie",
    "old_name": "frog",
    "moves": {
      "red": [[-2, 0], [-1, -1], [1, 1]],
      "blue": [[2, 0], [1, 1], [-1, -1]],
    }
  },
  {
    "shape": null,
    "name": "mrmime",
    "old_name": "goose",
    "moves": {
      "red": [[-1, -1], [-1, 0], [1, 0], [1, 1]],
      "blue": [[1, 1], [1, 0], [-1, 0], [-1, -1]],
    }
  },
  {
    "shape": null,
    "name": "litten",
    "old_name": "horse",
    "moves": {
      "red": [[-1, 0], [0, -1], [0, 1]],
      "blue": [[1, 0], [0, 1], [0, -1]],
    }
  },
  {
    "shape": null,
    "name": "litten",
    "old_name": "eel",
    "moves": {
      "red": [[-1, -1], [-1, 1], [1, 0]],
      "blue": [[1, 1], [1, -1], [-1, 0]],
    }
  },
  {
    "shape": null,
    "name": "eevee",
    "old_name": "rabbit",
    "moves": {
      "red": [[-1, 1], [1, -1], [2, 0]],
      "blue": [[1, -1], [-1, 1], [2, 0]],
    }
  },
  {
    "shape": null,
    "name": "abra",
    "old_name": "rooster",
    "moves": {
      "red": [[-1, 0], [-1, 1], [1, 0], [1, -1]],
      "blue": [[1, 0], [1, -1], [-1, 0], [-1, 1]],
    }
  },
  {
    "shape": null,
    "name": "litten",
    "old_name": "ox",
    "moves": {
      "red": [[0, 1], [0, -1], [1, 0]],
      "blue": [[0, -1], [0, 1], [-1, 0]],
    }
  },
  {
    "shape": null,
    "name": "litten",
    "old_name": "cobra",
    "moves": {
      "red": [[-1, 0], [1, 1], [1, -1]],
      "blue": [[1, 0], [-1, -1], [-1, 1]],
    }
  },
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

function show_upcoming_card(upside_down) {
  if (game_cards["temp"].shape.x > 0) {
    game_cards["temp"].shape.x = -400;
    game_cards["temp"].shape.y = -200;
  } else {
    if (upside_down) {
      game_cards["temp"].shape.rotation = 180;
      game_cards["temp"].shape.x = 600;
      game_cards["temp"].shape.y = 700;
    } else {
      game_cards["temp"].shape.rotation = 0;
      game_cards["temp"].shape.x = 200;
      game_cards["temp"].shape.y = 500;
    }
  }
}

function handle_click_card(evt) {
  current_card = evt.target.parent.card;
}

function setup_cards() {
  shuffle(cards)
  for (var i = 0; i < 5; i++) {
    cards[i].shape = new createjs.Container();
    shape = new createjs.Shape();
    shape.name = "shape";
    shape.card = cards[i];
    cards[i].shape.card = cards[i];
    cards[i].shape.addChild(shape);
    // cards[i].shape.getChildByName("shape").graphics.setStrokeStyle(2).beginStroke("rgba(0, 0, 0, 0.5)").drawRect(0, 0, 400, 200);
    stage.addChild(cards[i].shape);

    grid = new createjs.Shape();
    grid.graphics.beginBitmapFill(loader.getResult(cards[i].name)).drawRect(0, 0, 400, 200);
    cards[i].shape.addChild(grid);
    cards[i].shape.addEventListener("click", handle_click_card)
  }
  cards[0].shape.rotation = 180;
  cards[0].shape.x = 800;
  cards[0].shape.y = 200;
  cards[1].shape.rotation = 180;
  cards[1].shape.x = 400;
  cards[1].shape.y = 200;
  game_cards["blue"] = [cards[0], cards[1]];
  game_cards["red"] = [cards[2], cards[3]];
  game_cards["temp"] = cards[4];
  cards[2].shape.y = 1000;
  cards[3].shape.y = 1000;
  cards[3].shape.x = 400;
  cards[4].shape.y = 1200;
  console.log(cards[3].shape._card);
}
