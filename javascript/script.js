//создание игрового поля
for(var i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class = "block"></div>';
}
var hod = 0;
var time = 0;
var timer;

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

    checkWinner(); 
    
    //ничья
    if(hod==9 && checkWinner() == false){
        clearInterval(timer);
        document.getElementById('game').onclick = "";
        document.getElementById('game').style.color ="#BFA148";
        let imgDeadHeat = document.getElementById("deadHeat");
            let imgDH = document.createElement("IMG");
            imgDH.src = "../images/12 1.png";
            imgDeadHeat.appendChild(imgDH);
        tryAgane = document.getElementById("button");
            let imgTA = document.createElement("IMG");
            imgTA.src = "../images/Group 5.png";
            tryAgane.appendChild(imgTA);
    }
  
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

    //ничья
    if(hod==9 && checkWinner() == false){
        clearInterval(timer);
        document.getElementById('game').onclick = "";
        document.getElementById('game').style.color ="#BFA148";
        let imgDeadHeat = document.getElementById("deadHeat");
            imgDH = document.createElement("IMG");
            imgDH.src = "../images/12 1.png";
            imgDeadHeat.appendChild(imgDH);
        tryAgane = document.getElementById("button");
            imgTA = document.createElement("IMG");
            imgTA.src = "../images/Group 5.png";
            tryAgane.appendChild(imgTA);
    }
    
}
}



//выбор первого хода
function FuncX() {
    var rad=document.getElementsByName('first');
    for (var i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        FirstX();
      }
    }
  }
  function Func0() {
    var rad=document.getElementsByName('first');
    for (var i=0;i<rad.length; i++) {
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
            img = document.createElement("IMG");
            img.src = "../images/Group 5.png";
            tryAgane.appendChild(img);

//TryAgane
        document.getElementById("button").onclick = function () {
            /*location.reload();*/
            document.getElementById('game').innerHTML='';
            for(var i=0; i<9; i++){
                document.getElementById('game').innerHTML+='<div class = "block"></div>';
            }
            let uncheck=document.getElementsByTagName('input');
            for(var i=0;i<uncheck.length;i++)
             {
               if(uncheck[i].type=='radio')
               {
                 uncheck[i].checked=false;
               }
             }
        }
        

//если выиграли крестики

        if(allblock[comb[0]].innerHTML =='x' &&
            allblock[comb[1]].innerHTML == 'x'&& 
            allblock[comb[2]].innerHTML =='x'){
            let imgWin = document.getElementById("win");
            let img = document.createElement("IMG");
            img.src = "../images/Group 2.png";
            imgWin.appendChild(img);
            let scr = 0;
            scr+=1;
            document.getElementById("winX").innerHTML = scr;
            
        }


//если выйграли нолики
        if(allblock[comb[0]].innerHTML =='0' &&
            allblock[comb[1]].innerHTML == '0'&& 
            allblock[comb[2]].innerHTML =='0'){
            imgWin = document.getElementById("win");
            img = document.createElement("IMG");
            img.src = "../images/Group 3.png";
            imgWin.appendChild(img);
            scr = 0;
            scr+=1;
            document.getElementById("winO").innerHTML = scr;
        }

            return true;
        }
    
    }
    }
    return false;
  }