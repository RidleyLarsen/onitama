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
  document.querySelector("p." + player_colors[current_player]).classList.remove('hidden')
  document.querySelector("p." + player_colors[current_player * -1]).classList.add('hidden')
}

function check_win_by_capture() {
  var has_king = false;
  for (var i = 0; i < pieces[player_colors[current_player * -1]].length; i++) {
    if (pieces[player_colors[current_player * -1]][i].type == "king") {
      has_king = true;
    }
  }
  if (!has_king) {
    alert(player_names[player_colors[current_player]] + " wins!")
  }
}

init();
