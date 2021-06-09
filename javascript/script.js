//создание игрового поля
for(var i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class = "block"></div>';
}

let hod = 0;
let time = 0;
let timer;

//вызываем счетчик очков
if(sessionStorage.getItem('keyX')){
    counterX = JSON.parse(sessionStorage.getItem('keyX'));
    document.getElementById("winX").innerHTML = counterX;

}
if(sessionStorage.getItem('key0')){
    counter0 = JSON.parse(sessionStorage.getItem('key0'));
    document.getElementById("winO").innerHTML = counter0;

}

//первыми ходят Х
function FirstX() {
    timer = setInterval(updateTimer,1000);

    document.getElementById('game').onclick = function (event){
    console.log(event);
    if(event.target.className == 'block'){
        if(hod%2==0){
            event.target.innerHTML = 'x';  
        }
 
        else{
            event.target.innerHTML = '0';
        } 
        hod++; 
    }
//проверка
    checkWinner();
    check_DeadHeat();

}  
}




//первыми ходят 0
function First0() {
    timer = setInterval(updateTimer,1000);
    document.getElementById('game').onclick = function (event){
    console.log(event);
    if(event.target.className == 'block'){
        if(hod%2==0){
            event.target.innerHTML = '0';     
        }
        
        else{
            event.target.innerHTML = 'x';
        }
        hod++;  
    }
    checkWinner();
    check_DeadHeat();
    
}
}



//выбор первого хода
function FuncX() {
    let rad=document.getElementsByName('first');
    for (let i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        FirstX();
      }
    }
  }
  function Func0() {
    let rad=document.getElementsByName('first');
    for (let i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        First0();
      }
    }
  }



//таймер
  
  function updateTimer() {
      time++;
      Timing();
  }
  function Timing() {
      let minutes = Math.floor(time/60);
      let second = time%60;
      document.getElementById('timermin').innerHTML = minutes;
      document.getElementById('timersec').innerHTML = second;
  }



//проверка выйгрышных комбинаций/кнопка перезапуска
  function checkWinner(){
    console.log("XwinXwin");
    var allblock  = document.getElementsByClassName('block');

    let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
        [2, 4, 6],

    ];
    let otherCombs = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ]
    
    for (let comb of combs) {
        for(let otherComb of otherCombs){
		if (
			allblock[comb[0]].innerHTML == allblock[comb[1]].innerHTML &&
			allblock[comb[1]].innerHTML == allblock[comb[2]].innerHTML &&
			allblock[comb[0]].innerHTML != ''
		) {
            clearInterval(timer);
            document.getElementById('game').onclick = "";
            

            allblock[otherComb[0]].style.color = '#BFA148';
            allblock[otherComb[1]].style.color = '#BFA148';
            allblock[otherComb[2]].style.color = '#BFA148';
            allblock[otherComb[3]].style.color = '#BFA148';
            allblock[otherComb[4]].style.color = '#BFA148';
            allblock[otherComb[5]].style.color = '#BFA148';
            allblock[otherComb[6]].style.color = '#BFA148';
            allblock[otherComb[7]].style.color = '#BFA148';
            allblock[otherComb[8]].style.color = '#BFA148';

            allblock[comb[0]].style.color = '#000';
            allblock[comb[1]].style.color = '#000';
            allblock[comb[2]].style.color = '#000';

            let tryAgane = document.getElementById("button");
            imgTA = document.createElement("IMG");
            imgTA.src = "../images/Group 5.png";
            tryAgane.appendChild(imgTA);


        

//если выиграли крестики

        if(allblock[comb[0]].innerHTML =='x' &&
            allblock[comb[1]].innerHTML == 'x'&& 
            allblock[comb[2]].innerHTML =='x')
            {
            let imgWin = document.getElementById("win");
            let imgWinX = document.createElement("IMG");
            imgWinX.src = "../images/Group 2.png";
            imgWin.appendChild(imgWinX);
//счетчик очков    
            let counterX = 0;
            counterX = JSON.parse(sessionStorage.getItem('keyX'));
            counterX ++;
            document.getElementById("winX").innerHTML = counterX;
            sessionStorage.setItem('keyX', JSON.stringify(counterX));
            
            
        }


//если выйграли нолики
        if(allblock[comb[0]].innerHTML =='0' &&
            allblock[comb[1]].innerHTML == '0'&& 
            allblock[comb[2]].innerHTML =='0')
            {
            imgWin = document.getElementById("win");
            let imgWin0 = document.createElement("IMG");
            imgWin0.src = "../images/Group 3.png";
            imgWin.appendChild(imgWin0);
//счетчик очков
            let counter0 = 0;
            counter0 = JSON.parse(sessionStorage.getItem('key0'));
            counter0 ++;
            document.getElementById("winO").innerHTML = counter0;
            sessionStorage.setItem('key0', JSON.stringify(counter0));
            
        }
        //TryAgane
        document.getElementById("button").onclick = function () {
            location.reload();

        }

            return true;
        }

    }
    }
    return false;
  }



  function check_DeadHeat(){
      //ничья
      if(hod==9 && checkWinner() == false){
        clearInterval(timer);

        document.getElementById('game').onclick = "";
        document.getElementById('game').style.color ="#BFA148";
//deadHeat
        let imgDeadHeat = document.getElementById("deadHeat");
            let imgDH = document.createElement("IMG");
            imgDH.src = "../images/12 1.png";
            imgDeadHeat.appendChild(imgDH);
            
//tryAgane
        tryAgane = document.getElementById("button");
        let imgTA = document.createElement("IMG");
            imgTA.src = "../images/Group 5.png";
            tryAgane.appendChild(imgTA);
//перезапуск
        document.getElementById("button").onclick = function () {
                location.reload();
    
            }
    }
}