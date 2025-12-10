
const result = document.getElementById("diceResult");

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;

  if (dice === 6) {
    result.textContent = "🎉 You rolled a 6! You win!";
  } else {
    result.textContent = "You rolled a " + dice + ". Try again!";
  }
}

