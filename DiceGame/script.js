function rollDice1() {
  let s1 = Number(document.getElementById("player1Score").innerText);

  const d = Math.floor(Math.random() * 6 + 1);

  switch (d) {
    case 1: {
      document.getElementById("player1Dice").src = "./images/1.png";
      break;
    }
    case 2: {
      document.getElementById("player1Dice").src = "./images/2.png";
      break;
    }
    case 3: {
      document.getElementById("player1Dice").src = "./images/3.png";
      break;
    }
    case 4: {
      document.getElementById("player1Dice").src = "./images/4.png";
      break;
    }
    case 5: {
      document.getElementById("player1Dice").src = "./images/5.png";
      break;
    }
    case 6: {
      document.getElementById("player1Dice").src = "./images/6.png";
      break;
    }
    default: {
    }
  }

  s1 = s1 + d;
  document.getElementById("player1Score").innerText = s1;
  if(d===6){
    document.getElementById("rollDice1").disabled = true;
    document.getElementById("rollDice2").disabled = false;
  }
}

function rollDice2() {
    let s2 = Number(document.getElementById("player2Score").innerText);

    const d = Math.floor(Math.random() * 6 + 1);
  
    switch (d) {
      case 1: {
        document.getElementById("player2Dice").src = "./images/1.png";
        break;
      }
      case 2: {
        document.getElementById("player2Dice").src = "./images/2.png";
        break;
      }
      case 3: {
        document.getElementById("player2Dice").src = "./images/3.png";
        break;
      }
      case 4: {
        document.getElementById("player2Dice").src = "./images/4.png";
        break;
      }
      case 5: {
        document.getElementById("player2Dice").src = "./images/5.png";
        break;
      }
      case 6: {
        document.getElementById("player2Dice").src = "./images/6.png";
        break;
      }
      default: {
      }
    }
  
    s2 = s2 + d;
    document.getElementById("player2Score").innerText = s2;
    if(d===6){
      document.getElementById("rollDice2").disabled = true;
      document.getElementById("rollDice1").disabled = false;
    }
}

function startGame() {
  console.log("Game Started");

  const p1 = document.getElementById("player1").value.trim();
  const p2 = document.getElementById("player2").value.trim();

  document.getElementById("player1NameHeading").innerText = p1;
  document.getElementById("player1NameScore").innerText = p1;

  document.getElementById("player2NameHeading").innerText = p2;
  document.getElementById("player2NameScore").innerText = p2;

  document.getElementById("start").disabled = true;
  document.getElementById("reset").disabled = false;
  document.getElementById("rollDice1").disabled = false;
}

function resetGame() {
  if (confirm("Are you sure")) {
    location.reload();
  }
}
