function startGame() {
  const p1 = document.getElementById("Player1Name").value.trim();
  const p2 = document.getElementById("Player2Name").value.trim();

  document.getElementById("player1NameHeading").innerText = p1;
  document.getElementById("player2NameHeading").innerText = p2;

  document.getElementById("player1NameScore").innerText = p1;
  document.getElementById("player2NameScore").innerText = p2;

  document.getElementById("start").disabled = true;
  document.getElementById("reset").disabled = false;
}

function rollDice1() {
  console.log("rolling dice 1");
}

function rollDice2() {
  console.log("rolling dice 2");
}

function resetGame() {
  console.log("Reseting Game");
}

document.getElementById("Player1Name").addEventListener("change", checkInput);
document.getElementById("Player2Name").addEventListener("change", checkInput);

function checkInput() {
  const p1 = document.getElementById("Player1Name").value.trim();
  const p2 = document.getElementById("Player2Name").value.trim();

  if (p1.length > 2 && p2.length > 2) {
    document.getElementById("startGame").disabled = false;
  }
}
