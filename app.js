let p = 'X';

document.getElementById('tb-1').addEventListener('click', () => {pMove(1, `${p}`)});

document.getElementById('tb-2').addEventListener('click', () => {pMove(2, `${p}`)});

document.getElementById('tb-3').addEventListener('click', () => {pMove(3, `${p}`)});

document.getElementById('tb-4').addEventListener('click', () => {pMove(4, `${p}`)});

document.getElementById('tb-5').addEventListener('click', () => {pMove(5, `${p}`)});

document.getElementById('tb-6').addEventListener('click', () => {pMove(6, `${p}`)});

document.getElementById('tb-7').addEventListener('click', () => {pMove(7, `${p}`)});

document.getElementById('tb-8').addEventListener('click', () => {pMove(8, `${p}`)});

document.getElementById('tb-9').addEventListener('click', () => {pMove(9, `${p}`)});

function pMove(num, player){
  
  if (document.getElementById(`tb-${num}`).innerHTML === 'O' || document.getElementById(`tb-${num}`).innerHTML === 'X' || document.getElementById(`tb-${num}`).innerHTML === '--'){
    alert('Try again');
    p = player;
    return p;
  }
  else {
    document.getElementById(`tb-${num}`).innerHTML = `${player}`;
    if (player === 'X'){
      player = 'O';
    }
    else{
      player = 'X';
    }
    p = player;
    check()
    return p;
    
  }
  
}

function check(winCount = 3){
  let game = [
    [ document.getElementById('tb-1').innerHTML , document.getElementById('tb-2').innerHTML , document.getElementById('tb-3').innerHTML ],
    [ document.getElementById('tb-4').innerHTML , document.getElementById('tb-5').innerHTML , document.getElementById('tb-6').innerHTML ],
    [ document.getElementById('tb-7').innerHTML , document.getElementById('tb-8').innerHTML , document.getElementById('tb-9').innerHTML ]
  ];

  // column
  for (let i = 0; i < game.length; i++){
    let save_column = "";
    let count = 0;
    for (let j = 0; j < game.length; j++){
      if (game[j][i] === save_column){
        count ++;
      } 
      else{
        save_column = game[j][i];
        count = 1;
      }
      if (count == winCount && save_column !== '&nbsp; &nbsp;'){
        winShow(save_column);
      }
    }
  }

  // row
  for (let i = 0; i < game.length; i++){
    let save_row = "";
    let count = 0;
    for (let j = 0; j < game.length; j++){
      if (game[i][j] === save_row){
        count ++;
      } 
      else{
        save_row = game[i][j];
        count = 1;
      }
      if (count == winCount && save_row !== '&nbsp; &nbsp;'){
        winShow(save_row);
      }
    }
  }

  let save_diameter = "";
  let count = 0;
  for (let j = 0; j < game.length; j++){
    if (game[j][j] === save_diameter){
      count ++;
    } 
    else{
      save_diameter = game[j][j];
      count = 1;
    }
    if (count == winCount && save_diameter !== '&nbsp; &nbsp;'){
      winShow(save_diameter);
    }
  }
  
  
  let diameter2 = "";
  let count2 = 0;
  for (let j = 0; j < game.length; j++){
    if (game[j][game.length - 1 - j] === diameter2){
      count2 ++;
    } 
    else{
      diameter2 = game[j][game.length - 1 - j];
      count2 = 1;
    }
    if (count2 == winCount && diameter2 !== '&nbsp; &nbsp;'){
      winShow(diameter2);
    }
  }

}

function winShow(winer){
  document.getElementById('won').innerHTML = `${winer} won the game` ;
  for ( let i = 1; i < 10; i++) {
    if (document.getElementById(`tb-${i}`).innerHTML === '&nbsp; &nbsp;'){
      document.getElementById(`tb-${i}`).innerHTML = '--';
    }
    
  }
  
}
