console.log('This is TicTacToe game');

let box = Array.from(document.getElementsByClassName('box'));
let info = document.getElementById('info');
let reset = document.getElementById('reset');
let player = 'X';
info.innerHTML = `Turn for ${player}`;
let index;
let arr = [];
let audio1 = new Audio('music.mp3')
let audio2 = new Audio('ting.mp3')
let audio3 = new Audio('gameover.mp3');


const checkWin = (winningPlayer) => {
  // let boxTexts = document.getElementsByClassName('boxText');
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  win.forEach(element => {
    if ((box[element[0]].innerText === box[element[1]].innerText) && (box[element[2]].innerText == box[element[1]].innerText) && box[element[0]].innerText !== "") {
      info.innerHTML = `${winningPlayer} Won`;
      document.getElementsByTagName('img')[0].style.width = '18rem';
      audio1.play();
    }
    
  })
  if (arr.length == 9 && info.innerHTML != `${winningPlayer} Won`) {
    audio3.play();
    info.innerHTML = 'Game over';
    document.body.style.backgroundColor = 'red';
    document.body.style.transition = '1s ease-in-out'
    setTimeout(() => {
      document.body.style.backgroundColor = 'white'
    }, 1500);
  }
}

box.forEach((element, i) => {
  element.addEventListener('click', (e) => {
    if (info.innerHTML == 'Turn for X' && !arr.includes(i)) {
      element.innerHTML = 'X';
      arr.push(i)
      player = 'O';
      info.innerHTML = `Turn for ${player}`;
      audio2.play();
      checkWin('X');

    }
    else if (info.innerHTML == 'Turn for O' && !arr.includes(i)) {
      player = 'X'
      info.innerHTML = `Turn for ${player}`;
      element.innerHTML = 'O';
      arr.push(i);
      audio2.play();
      checkWin('O');
    }
  })
})

reset.addEventListener('click', () => {
  box.forEach((element) => {
    element.innerHTML = '';
    arr = [];
    info.innerHTML = 'Turn for X';
    audio1.currentTime = 0;
    audio1.pause();
    document.getElementsByTagName('img')[0].style.width = '0%';



  })
})