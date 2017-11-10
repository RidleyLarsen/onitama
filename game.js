// This file contains the code used for running the game.
/*
    Things this file needs to do:
      * Manage which player's turn it is.
      * Determine if someone has won.
*/

var player_colors = {1: "red", "-1": "blue"};
var player_names = {"red": "Ridley", "blue": "JaNay"}
var current_player = 1;

function switch_player() {
  current_player = current_player * -1;
  console.log("It is now", player_names[player_colors[current_player]] + "'s turn.'")
}

init();
