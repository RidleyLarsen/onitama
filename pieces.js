// This file contains code to draw the game pieces and move them.
/*
    Things that game pieces can do:

      * Move, using one of the cards on your side of the table.
      * Capture a piece by moving into it.
      * Enter the winning space.
      * After clicking on a piece, the piece will ask the cards what spaces they
        can move to, then ask the board to highlight those spaces.

*/
var current_piece = {};

pieces = {
  "red": [
    {color: "red", sprite: "red_pawn", "type": "pawn", "x": 0, "y": 4, shape: null},
    {color: "red", sprite: "red_pawn", "type": "pawn", "x": 1, "y": 4, shape: null},
    {color: "red", sprite: "red_king", "type": "king", "x": 2, "y": 4, shape: null},
    {color: "red", sprite: "red_pawn", "type": "pawn", "x": 3, "y": 4, shape: null},
    {color: "red", sprite: "red_pawn", "type": "pawn", "x": 4, "y": 4, shape: null}
  ],
  "blue": [
    {color: "blue", sprite: "blue_pawn", "type": "pawn", "x": 0, "y": 0, shape: null},
    {color: "blue", sprite: "blue_pawn", "type": "pawn", "x": 1, "y": 0, shape: null},
    {color: "blue", sprite: "blue_king", "type": "king", "x": 2, "y": 0, shape: null},
    {color: "blue", sprite: "blue_pawn", "type": "pawn", "x": 3, "y": 0, shape: null},
    {color: "blue", sprite: "blue_pawn", "type": "pawn", "x": 4, "y": 0, shape: null}
  ]
}

function add_piece_shapes() {
  for (var i = 0; i < pieces["red"].length; i++) {
    var sprite = loader.getResult(pieces["red"][i].sprite);
    pieces["red"][i].shape = new createjs.Container();
    shape = new createjs.Shape();
    shape.piece = pieces["red"][i];
    shape.name = "shape";
    pieces["red"][i].shape.addChild(shape)
    pieces["red"][i].shape.addEventListener("click", handle_click_piece);
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
      pieces["red"][i].shape.getChildByName("shape").y = (200) + (160 * pieces["red"][i].y)
  }
  for (var i = 0; i < pieces["blue"].length; i++) {
    var sprite = loader.getResult(pieces["blue"][i].sprite);
    pieces["blue"][i].shape = new createjs.Container();
    shape = new createjs.Shape();
    shape.piece = pieces["blue"][i];
    shape.name = "shape";
    pieces["blue"][i].shape.addChild(shape)
    pieces["blue"][i].shape.addEventListener("click", handle_click_piece);
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
      pieces["blue"][i].shape.getChildByName("shape").x = 160 * pieces["blue"][i].x;
      pieces["blue"][i].shape.getChildByName("shape").y = (200) + (160 * pieces["blue"][i].y);
  }
}

function setup_pieces() {
  add_piece_shapes();
}

function capture_pieces(piece) {
  console.log("looking at", player_colors[current_player * -1], "'s pieces. piece passed was", piece)
  for (var i = 0; i < pieces[player_colors[current_player * -1]].length; i++) {
    if (pieces[player_colors[current_player * -1]][i] === undefined) { continue };
    if ((piece.x == pieces[player_colors[current_player * -1]][i].x) && (piece.y == pieces[player_colors[current_player * -1]][i].y)) {
      stage.removeChild(pieces[player_colors[current_player * -1]][i].shape)
      stage.update();
      pieces[player_colors[current_player * -1]][i] = undefined;
    }
  }
}

function handle_click_highlight(evt) {
  console.log(evt.target);
  console.log(current_piece.x, evt.target.board_x, evt.target.board_y);
  move_piece(current_piece, evt.target.board_x, evt.target.board_y);
  capture_pieces(current_piece);
  remove_card_highlights();
  swap_cards();
  check_win_by_king_move();
  check_win_by_capture();
  switch_player();
}

function handle_click_piece(evt) {
  if (evt.target.piece.color !== player_colors[current_player]) {
    return;
  }
  current_piece = evt.target.piece;
  remove_highlights();
  for (var i = 0; i < current_card.moves[player_colors[current_player]].length; i++) {
    highlight = highlightSquare(
        evt.target.piece.x + current_card.moves[player_colors[current_player]][i][0],
        evt.target.piece.y + current_card.moves[player_colors[current_player]][i][1],
        player_colors[current_player]
    )
    if (highlight !== undefined) {
      highlight.addEventListener("click", handle_click_highlight)
    }
  }
}

function move_piece(piece, x, y) {
  piece.x = x;
  piece.y = y;
  piece.shape.getChildByName("shape").x = 160 * x;
  piece.shape.getChildByName("shape").y = (200) + 160 * y;
  stage.update();
  remove_highlights();
}
