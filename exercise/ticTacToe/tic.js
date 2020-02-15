function $(p) {
  let elements;
  if(p[0] === '.') {
    p = p.slice(1);
    elements = document.getElementsByClassName(p);
  }
  else if (p[0] === '#') {
    p = p.slice(1);
    elements = document.getElementById(p);
  }
  else {
    elements = document.getElementsByTagName(p);
  }
  return elements;
}

let isPlayer1 = true;
let squares = $('td');
let board = ['', '', '', '', '', '', '', '', ''];
let checker = setInterval(() => {
  for (let i = 0; i < 9; i++) {
    board[i] = squares[i].innerText;
  }
  console.log(board);

  if (checkLine(0, 1, 2) ||
      checkLine(3, 4, 5) ||
      checkLine(6, 7, 8) ||
      checkLine(0, 3, 6) ||
      checkLine(1, 4, 7) ||
      checkLine(2, 5, 8) ||
      checkLine(0, 5, 8) ||
      checkLine(2, 4, 6) ||
      checkDraw()) {
        console.log("Game over!");
        clearInterval(checker);
      }
}, 300);

function checkLine(a, b, c) {
  if (board[a] == board[b] && board[b] == board[c] && board[a]) {
    alert(`Player ` + (board[a] == 'X' ? `1` : `2`) + ` win!`);
    return true;
  }

  return false;
}

function checkDraw() {
  for (let e of board) {
    if (e == '') return false;
  }

  alert("Draw!");
  return true;
}


for (let i = 0; i < 9; i++) {
  squares[i].addEventListener("click", function() {
    if (squares[i].innerText) return;

    if (isPlayer1) {
      squares[i].innerText = 'X';
      $('#player1').classList.remove("current");
      $('#player2').classList.add("current");
      isPlayer1 = false;
    }
    else {
      squares[i].innerText = 'O';
      $('#player2').classList.remove("current");
      $('#player1').classList.add("current");
      isPlayer1 = true;
    }
  });
}
