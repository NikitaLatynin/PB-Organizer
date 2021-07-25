let num = document.getElementById("num");
let but = document.getElementById("inc");
let num1 = document.getElementById("new-num");
let but1 = document.getElementById("new-inc");
let last_Update = document.getElementById("time-change-1");
let last_Update1 = document.getElementById("time-change-2");
let selectPaid = document.querySelector('.select');
let inNum = 0;
let inNum1 = 0;
let timeMinut;
let kostyl = false;

but.addEventListener('click', function () {
    if (!kostyl) {
      timer();
    } else {
      clearTimer(last_Update);
    };
    kostyl = true;
    timeMinut = parseInt(last_Update.innerText) * 60;
    let n = Number(selectPaid.value);
    inNum = inNum + n;
    num.innerText = inNum;
    }
);

but1.addEventListener('click', function () {
    inNum1++;
    num1.innerText = inNum1;
    }
);

function timer() {
  let strTimer;
  clearTimer(strTimer);
  setInterval(function () {
    let seconds = timeMinut % 60; 
    let minutes = timeMinut / 60 % 60; 
    let hour = timeMinut / 60 / 60 % 60;
    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    last_Update.innerHTML = strTimer;
    timeMinut++; 
  }, 1000);
};

function clearTimer(str){
  str = '0:0:0';
}


