$(document).ready(function() {
  var score = 0;
  $('#play-button').click(function() {
    // Generate a random number between 1 and 13 for both the player and the computer
    var playerCard = Math.floor(Math.random() * 13) + 1;
    var computerCard = Math.floor(Math.random() * 13) + 1;
    // Display the cards in the game container
    $('#player-hand').text(playerCard);
    $('#computer-hand').text(computerCard);
    // Determine the winner
    if (playerCard > computerCard) {
      // Player wins
      score++;
      $('#middle').text('You win!');
    } else if (playerCard < computerCard) {
      // Computer wins
      score--;
      $('#middle').text('Computer wins');
    } else {
      // It's a tie
      $('#middle').text("It's a tie");
    }
    // Update the score
    $('#score-value').text(score);
  });
});
