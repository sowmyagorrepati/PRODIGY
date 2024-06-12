let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgbox = document.querySelector(".msgbox");
let msg = document.querySelector("#msg");
let playComputerBtn = document.querySelector("#playComputer");
let twoPlayerBtn = document.querySelector("#twoPlayer");
let turnMsg = document.querySelector("#turn-msg");

let turnO = true;
let playAgainstComputer = false;

const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const updateTurnMessage = () => {
    turnMsg.innerText = turnO ? "'O', it's your turn" : "'X', it's your turn";
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
            }
            box.disabled = true;
            updateTurnMessage();
            checkGameStatus();

            if (playAgainstComputer && !turnO) {
                setTimeout(computerMove, 200);
            }
        }
    });
});

const showMessage = (message) => {
    msg.innerText = message;
    msgbox.classList.remove("hide");
}

const checkGameStatus = () => {
    if (checkWin()) {
        disableAllBoxes();
    } else if (checkDraw()) {
        showMessage("It's a Draw!");
        blast();
    }
};

const checkWin = () => {
    for (let pattern of winning) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showMessage(`Congratulations, Winner is ${pos1}`);
                blast();
                return true;
            }
        }
    }
    return false;
};

const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerHTML === "") {
            return false;
        }
    }
    return true;
};

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const resetGame = () => {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
    });
    msgbox.classList.add("hide");
    turnO = true;
    updateTurnMessage();
};

const newGame = () => {
    resetGame();
};

const resetActiveMode = () => {
    playComputerBtn.classList.remove("active-mode");
    twoPlayerBtn.classList.remove("active-mode");
};

const playComputer = () => {
    resetGame();
    playAgainstComputer = true;
    updateTurnMessage();
    resetActiveMode();
    playComputerBtn.classList.add("active-mode");
};

const twoPlayer = () => {
    resetGame();
    playAgainstComputer = false;
    updateTurnMessage();
    resetActiveMode();
    twoPlayerBtn.classList.add("active-mode");
};

const computerMove = () => {
    let emptyBoxes = [];
    boxes.forEach(box => {
        if (box.innerHTML === "") {
            emptyBoxes.push(box);
        }
    });

    if (emptyBoxes.length > 0) {
        let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
        randomBox.innerHTML = "X";
        randomBox.disabled = true;
        turnO = true;
        checkGameStatus();
        updateTurnMessage();
    }
};

reset.addEventListener("click", resetGame);
newgame.addEventListener("click", newGame);
playComputerBtn.addEventListener("click", playComputer);
twoPlayerBtn.addEventListener("click", twoPlayer);

updateTurnMessage();

const blast=()=>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}