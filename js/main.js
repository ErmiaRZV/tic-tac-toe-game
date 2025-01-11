const startDiv = document.querySelector("#startDiv");
const selectMode = document.querySelector("#selectMode");
const PVP = document.querySelector("#PVP");
const PVB = document.querySelector("#PVB");
const dice = document.querySelector("#dice");
const startGamePVP = document.querySelector("#startGamePVP");
const startGamePVB = document.querySelector("#startGamePVB");
const backPVP = document.querySelector("#backPVP");
const backGamePVP = document.querySelector("#backGamePVP");
const backGamePVB = document.querySelector("#backGamePVB");
const backPVB = document.querySelector("#backPVB");
const selectXO = document.querySelector("#selectXO");
const dicePVB = document.querySelector("#dicePVB");
const diceBot = document.querySelector("#diceBot");
const backDicePVB = document.querySelector("#backDicePVB");
const gamePVP = document.querySelector("#gamePVP");
const gamePVB = document.querySelector("#gamePVB");
const boxPVP = document.querySelectorAll("#boxPVP>div");
const boxPVB = document.querySelectorAll("#boxPVB>div");
const gameBoxPVP = document.querySelectorAll("#boxPVP");

const XO = ["X", "O"];
let starterPVP;
let starterPVB;
let youAre;
let bot;
let botBoxes = [];
let counter =[]
let win = false;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// start game
selectMode.children[0].addEventListener("click", () => {
  // player vs player
  startDiv.classList.add("goup");
  PVP.classList.remove("goup");
});
selectMode.children[1].addEventListener("click", () => {
  // player vs bot
  startDiv.classList.add("goup");
  PVB.classList.remove("goup");
});

// specify who should start in PVP

dice.addEventListener("click", () => {
  starterPVP = XO[parseInt(Math.random() * 2)];
  dice.classList.add("dice");
  dice.innerHTML = "";
  setTimeout(() => {
    dice.innerHTML = starterPVP;
  }, 800);
  setTimeout(() => {
    dice.nextElementSibling.innerHTML = starterPVP + " should start";
    dice.style.cursor = "auto";
    dice.nextElementSibling.nextElementSibling.children[0].innerHTML =
      "start game";
    dice.nextElementSibling.nextElementSibling.children[0].style.display =
      "flex";
  }, 1000);
});
// specify who should start in PVB

diceBot.addEventListener("click", () => {
  diceBot.classList.add("dice");
  starterPVB = XO[parseInt(Math.random() * 2)];
  diceBot.innerHTML = "";
  setTimeout(() => {
    diceBot.innerHTML = starterPVB;
  }, 800);
  setTimeout(() => {
    diceBot.nextElementSibling.innerHTML = starterPVB + " should start";
    diceBot.style.cursor = "auto";
    diceBot.nextElementSibling.nextElementSibling.children[0].innerHTML =
      "start game";
    diceBot.nextElementSibling.nextElementSibling.children[0].style.display =
      "flex";
  }, 1000);
});

// specify Which one do yo want in PVB
selectXO.children[0].addEventListener("click", () => {
  PVB.classList.add("goup");
  dicePVB.classList.remove("goup");
  youAre = "X";
  bot = "O";
});
selectXO.children[1].addEventListener("click", () => {
  PVB.classList.add("goup");
  dicePVB.classList.remove("goup");
  youAre = "O";
  bot = "X";
});

// back button

backPVP.addEventListener("click", () => {
  startDiv.classList.remove("goup");
  PVP.classList.add("goup");

  dice.innerHTML = "click";
  starterPVP = "";
  dice.nextElementSibling.nextElementSibling.children[0].style.display = "none";
  dice.nextElementSibling.innerHTML = "";
  dice.classList.remove("dice");
  dice.style.cursor = "pointer";
});

backPVB.addEventListener("click", () => {
  startDiv.classList.remove("goup");
  PVB.classList.add("goup");
});

backDicePVB.addEventListener("click", () => {
  dicePVB.classList.add("goup");
  PVB.classList.remove("goup");

  diceBot.innerHTML = "click";
  starterPVB = "";
  diceBot.nextElementSibling.nextElementSibling.children[0].style.display =
    "none";
  diceBot.nextElementSibling.innerHTML = "";
  diceBot.classList.remove("dice");
  diceBot.style.cursor = "pointer";
});

backGamePVP.addEventListener("click", () => {
  gamePVP.classList.add("goup");
  startDiv.classList.remove("goup");
  backGamePVP.nextElementSibling.innerHTML = "";
  backGamePVP.nextElementSibling.style.display = "none";
  boxPVP.forEach((val) => {
    val.innerHTML = "";
    val.classList.remove("win");
    val.removeAttribute("inert");

    dice.innerHTML = "click";
    starterPVP = "";
    dice.nextElementSibling.nextElementSibling.children[0].style.display =
      "none";
    dice.nextElementSibling.innerHTML = "";
    dice.classList.remove("dice");
    dice.style.cursor = "pointer";
  });
});

backGamePVB.addEventListener("click", () => {
  gamePVB.classList.add("goup");
  startDiv.classList.remove("goup");

  backGamePVB.nextElementSibling.innerHTML = "";
  backGamePVB.nextElementSibling.style.display = "none";
  boxPVB.forEach((val) => {
    val.innerHTML = "";
    val.classList.remove("win");
    val.removeAttribute("inert");

    diceBot.innerHTML = "click";
    starterPVB = "";
    diceBot.nextElementSibling.nextElementSibling.children[0].style.display =
      "none";
    diceBot.nextElementSibling.innerHTML = "";
    diceBot.classList.remove("dice");
    diceBot.style.cursor = "pointer";
  });
});

// game

function checkWinner(box, backGame) {
  winPatterns.forEach((pattern) => {
    const [a, b, c] = pattern;
    if (
      box[a].innerHTML != "" &&
      box[a].textContent === box[b].textContent &&
      box[a].textContent === box[c].textContent
    ) {
      win = true;
      pattern.forEach((val) => {
        box[val].classList.add("win");
        backGame.nextElementSibling.innerHTML = box[a].innerHTML + " has won ";
        backGame.nextElementSibling.style.display = "flex";
      });
      box.forEach((val) => {
        val.setAttribute("inert", "inert");
      });
      
    }
  });
}

// game PVP





startGamePVP.addEventListener("click", () => {
  PVP.classList.add("goup");
  gamePVP.classList.remove("goup");
});

boxPVP.forEach((val) => {
  val.addEventListener("click", (e) => {
    counter =[]
    boxPVP.forEach((vall,ii)=>{
        if (vall.innerHTML!="") {
            counter[counter.length]=ii
            if (counter.length==8) {
                backGamePVP.nextElementSibling.style.display='flex'
                backGamePVP.nextElementSibling.innerHTML='Draw'
            }
        }
    })
    console.log(counter.length);
    
    e.target.innerHTML = starterPVP;
    e.target.setAttribute("inert", "inert");
    starterPVP = starterPVP == "X" ? "O" : "X";
    checkWinner(boxPVP, backGamePVP);
  });
});

// game PVB


startGamePVB.addEventListener("click", () => {
    if (botBoxes.length==0) {
        backGamePVB.nextElementSibling.innerHTML='Draw'
    }
  backGamePVB.nextElementSibling.style.display='flex'
  win=false
  dicePVB.classList.add("goup");
  gamePVB.classList.remove("goup");
  botBoxes = [];
  
  if (starterPVB == youAre) {
    backGamePVB.nextElementSibling.innerHTML = "choose one of them";
    boxPVB.forEach((itemm) => {
        itemm.removeAttribute("inert");
      });
  } else {
    backGamePVB.nextElementSibling.innerHTML = "wait for bot";

    setTimeout(() => {
      boxPVB.forEach((ite, a) => {
        ite.setAttribute("inert", "inert");
        if (ite.innerHTML == "") {
          botBoxes[botBoxes.length] = a;
        }
      });
      boxPVB[botBoxes[parseInt(Math.random() * botBoxes.length)]].innerHTML =
        bot;
      backGamePVB.nextElementSibling.innerHTML = "choose one of them";
      checkWinner(boxPVB, backGamePVB);
      boxPVB.forEach((value, index) => {
        if (value.innerHTML == "") {
          botBoxes[botBoxes.length] = index;
          value.removeAttribute("inert");
        }
      });
    }, 1000);
  }
});

boxPVB.forEach((val) => {
  val.addEventListener("click", () => {
    if (win == false) {
      botBoxes = [];

      val.innerHTML = youAre;
      backGamePVB.nextElementSibling.innerHTML = "wait for bot";
      checkWinner(boxPVB, backGamePVB);
      boxPVB.forEach((item, i) => {
        item.setAttribute("inert", "inert");
        if (item.innerHTML == "") {
          botBoxes[botBoxes.length] = i;
        }
      });

      if (win == false) {
        setTimeout(() => {
          boxPVB[
            botBoxes[parseInt(Math.random() * botBoxes.length)]
          ].innerHTML = bot;
          if (botBoxes.length==0) {
            backGamePVB.nextElementSibling.innerHTML='Draw'
        }
          backGamePVB.nextElementSibling.innerHTML = "choose one of them";
          
          boxPVB.forEach((value, index) => {
            if (value.innerHTML == "") {
              botBoxes[botBoxes.length] = index;
              value.removeAttribute("inert");
            }
          });
          checkWinner(boxPVB, backGamePVB);
        }, 1000);
      }
    }
  });
});
