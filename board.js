// This file contains the code to draw the board.
/*
    The board is a 5x5 grid. This will be represented in the code as a 2-dimensional list.

    [
      [3, 3, 4, 3, 3],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 2, 1, 1]
    ]

    Where 1 and 3 are each player's small pawns, 2 and 4 are the king pawns.
*/

var SQUARE_WIDTH = 160;
var SQUARE_HEIGHT = 160;

function highlightSquare(x, y, color) {
  if ((x < 0) || (y < 0) || (x > 4) || (y > 4)) {
    return;
  }
  if (color == "red") {
    color = "rgba(255, 100, 100, 0.5)"
    for (var i = 0; i < pieces["red"].length; i++) {
      if (pieces["red"][i] === undefined) { continue; }
      if ((pieces["red"][i].x == x) && (pieces["red"][i].y == y)) {
        console.log(x, y, pieces["red"][i].x, pieces["red"][i].y)
        return;
      }
    }
  } else {
    color = "rgba(100, 100, 255, 0.5)"
    for (var i = 0; i < pieces["blue"].length; i++) {
      if (pieces["blue"][i] === undefined) { continue; }
      if ((pieces["blue"][i].x == x) && (pieces["blue"][i].y == y)) {
        console.log(x, y, pieces["blue"][i].x, pieces["blue"][i].y)
        return;
      }
    }
  }
  var highlight = new createjs.Shape();
  highlight.name = "highlight";
  highlight.graphics.beginFill(color).drawRect(0, 0, SQUARE_WIDTH, SQUARE_HEIGHT);
  highlight.x = SQUARE_WIDTH * x;
  highlight.y = 200 + (SQUARE_HEIGHT * y);
  highlight.board_x = x;
  highlight.board_y = y;
  // highlight.cache(0, 0, 160, 160);
  // highlight.graphics.beginBitmapFill(loader.getResult(color + "_highlight")).drawRect(SQUARE_WIDTH * w, SQUARE_HEIGHT * h, w, h);
  stage.addChild(highlight);
  return highlight;
}

function remove_card_highlights() {
  while (stage.getChildByName("card_highlight") !== null) {
    child = stage.getChildByName("card_highlight");
    stage.removeChild(child);
  }
}

function remove_highlights() {
  while (stage.getChildByName("highlight") !== null) {
    child = stage.getChildByName("highlight");
    stage.removeChild(child);
  }
}
