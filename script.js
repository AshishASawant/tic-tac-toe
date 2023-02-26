let turn = "X";
let win = false;
let audio = new Audio("audio2.wav");
let boxes = document.getElementsByClassName("boxes");
let reset = document.getElementById("reset");
let wingif = document.querySelector(".wingif");
let details = document.querySelector(".details");


reset.addEventListener("click", () => {
  win = false;
  Array.from(boxes).forEach((box) => {
    box.innerHTML = "";
  });
  turn = "X";
  details.innerHTML = `<h3>Turn for: <span class="playerTurn">${turn}</span></h3>`;
  wingif.style.display = "none";
  wingif.style.width = "0";
  document.querySelector('.gamecontainer').style.pointerEvents=''
});

const changeturn = () => {
  let playerTurn = document.querySelector(".playerTurn");
  if (win === true) {
    details.children[0].innerHTML = turn + " " + "Won";
  } else if (turn === "X") {
    turn = "O";
    playerTurn.innerText = turn;
  } else {
    turn = "X";
    playerTurn.innerText = turn;
  }
};

const winCase = () => {
  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wingif.style.display = "block";
  for (let index = 0; index < winCondition.length; index++) {
    if (
      boxes[winCondition[index][0]].innerHTML ===
        boxes[winCondition[index][1]].innerHTML &&
      boxes[winCondition[index][1]].innerHTML ===
        boxes[winCondition[index][2]].innerHTML &&
      boxes[winCondition[index][0]].innerHTML !== ""
    ) {
      win = true;
      wingif.style.display = "block";
      wingif.style.width = "20vw";
    document.querySelector('.gamecontainer').style.pointerEvents='none'
      break;
    }
  }
  changeturn();
};

Array.from(boxes).forEach((box) => {
  box.addEventListener(
    "click",
    (clicked = () => {
      if(box.innerText===""){
        box.innerText=turn;
        winCase();
        audio.play();
      }
    }),
  );
});
