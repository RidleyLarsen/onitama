// This file contains code to draw the game pieces and move them.
/*
    Things that game pieces can do:

      * Move, using one of the cards on your side of the table.
      * Capture a piece by moving into it.
      * Enter the winning space.
      * After clicking on a piece, the piece will ask the cards what spaces they
        can move to, then ask the board to highlight those spaces.

*/

pieces = {
  "red": [
    {sprite: "red_pawn", color: "rgba(255, 0, 0, 0.2)", "type": "pawn", "x": 0, "y": 4, shape: null},
    {sprite: "red_pawn", color: "rgba(255, 0, 0, 0.2)", "type": "pawn", "x": 1, "y": 4, shape: null},
    {sprite: "red_king", color: "rgba(255, 0, 0, 0.8)", "type": "king", "x": 2, "y": 4, shape: null},
    {sprite: "red_pawn", color: "rgba(255, 0, 0, 0.2)", "type": "pawn", "x": 3, "y": 4, shape: null},
    {sprite: "red_pawn", color: "rgba(255, 0, 0, 0.2)", "type": "pawn", "x": 4, "y": 4, shape: null}
  ],
  "blue": [
    {sprite: "blue_pawn", color: "rgba(0, 0, 255, 0.2)", "type": "pawn", "x": 0, "y": 0, shape: null},
    {sprite: "blue_pawn", color: "rgba(0, 0, 255, 0.2)", "type": "pawn", "x": 1, "y": 0, shape: null},
    {sprite: "blue_king", color: "rgba(0, 0, 255, 0.8)", "type": "king", "x": 2, "y": 0, shape: null},
    {sprite: "blue_pawn", color: "rgba(0, 0, 255, 0.2)", "type": "pawn", "x": 3, "y": 0, shape: null},
    {sprite: "blue_pawn", color: "rgba(0, 0, 255, 0.2)", "type": "pawn", "x": 4, "y": 0, shape: null}
  ]
}

function add_piece_shapes() {
  for (var i = 0; i < pieces["red"].length; i++) {
    var sprite = loader.getResult(pieces["red"][i].sprite);
    pieces["red"][i].shape = new createjs.Container();
    shape = new createjs.Shape();
    shape.name = "shape";
    pieces["red"][i].shape.addChild(shape)
    stage.addChild(pieces["red"][i].shape)
    pieces["red"][i].shape
      .getChildByName("shape")
      .graphics
      .beginBitmapFill(sprite)
      .drawRect(
          0,
          0,
          160,
          160
      );
      pieces["red"][i].shape.getChildByName("shape").x = 160 * pieces["red"][i].x
      pieces["red"][i].shape.getChildByName("shape").y = 160 * pieces["red"][i].y
  }
  for (var i = 0; i < pieces["blue"].length; i++) {
    var sprite = loader.getResult(pieces["blue"][i].sprite);
    pieces["blue"][i].shape = new createjs.Container();
    shape = new createjs.Shape();
    shape.name = "shape";
    pieces["blue"][i].shape.addChild(shape)
    stage.addChild(pieces["blue"][i].shape)
    pieces["blue"][i].shape
      .getChildByName("shape")
      .graphics
      .beginBitmapFill(sprite)
      .drawRect(
          0,
          0,
          160,
          160
      );
      pieces["blue"][i].shape.getChildByName("shape").x = 160 * pieces["blue"][i].x
      pieces["blue"][i].shape.getChildByName("shape").y = 160 * pieces["blue"][i].y
  }
}

function highlight_available_moves(card) {
  for (var i = 0; i < cards[card].length; i++) {
    highlightSquare(2 + cards[card][i][0], 2 + cards[card][i][1], "red");
  }
}

function setup_pieces() {
  add_piece_shapes();
}

function move_piece(piece, x, y) {
  piece.x = x;
  piece.y = y;
  piece.shape.getChildByName("shape").x = 160 * x;
  piece.shape.getChildByName("shape").y = 160 * y;
  stage.update();
}

setup_pieces();
