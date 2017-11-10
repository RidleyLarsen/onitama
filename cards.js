// This file contains code to draw the cards and provide possible moves to the pieces.
/*
    Things this file needs to do:
      * Select 5 random cards at the beginning of the game.
      * Provide a function for each player to get their move set.
*/

var cards = {
  "tiger": [[0, -2], [0, 1]],
  "crab": [[-2, 0], [0, -1], [2, 0]],
  "monkey": [[-1, -1], [-1, 1], [1, -1], [1, 1]],
  "crane": [[-1, 1], [1, 1], [0, 1]],
  "dragon": [[-2, -1], [-1, 1], [1, 1], [2, -1]],
  "elephant": [[-1, 0], [-1, -1], [1, 0], [1, 1]],
  "mantis": [[-1, -1], [1, -1], [0, 1]],
  "boar": [[-1, 0], [0, -1], [1, 0]],
  "frog": [[-2, 0], [-1, -1], [1, 1]],
  "goose": [[-1, -1], [-1, 0], [1, 0], [1, 1]],
  "horse": [[-1, 0], [0, -1], [0, 1]],
  "eel": [[-1, -1], [-1, 1], [1, 0]],
  "rabbit": [[-1, 1], [1, -1], [2, 0]],
  "rooster": [[-1, 0], [-1, 1], [1, 0], [1, 1]],
  "ox": [[0, 1], [0, -1], [1, 0]],
  "cobra": [[-1, 0], [1, 1], [1, -1]]
}

// function get_random_cards() {
//     var chosen_cards = [];
//     while (chosen_cards.length < 5) {
//       var temp_cards = Object.assign({}, cards);
//       temp_card_names = Object.keys(temp_cards);
//       i = parseInt(Math.random() * temp_card_names.length);
//       chosen_cards.push(cards[temp_card_names[i]])
//       temp_cards
//     }
//
// }
