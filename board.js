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
  var highlight = new createjs.Shape();
  highlight.graphics.beginFill(color).drawRect(SQUARE_WIDTH * x, SQUARE_HEIGHT * y, SQUARE_WIDTH, SQUARE_HEIGHT);
  // highlight.cache(0, 0, 160, 160);
  // highlight.graphics.beginBitmapFill(loader.getResult(color + "_highlight")).drawRect(SQUARE_WIDTH * w, SQUARE_HEIGHT * h, w, h);
  stage.addChild(highlight);
}
