let num = document.getElementById("num");
let but = document.getElementById("inc");
let num1 = document.getElementById("new-num");
let but1 = document.getElementById("new-inc");
let inNum = 0;
let inNum1 = 0;

but.addEventListener('click', function () {
    inNum++;
    console.log(inNum);
    num.innerText = inNum;
    }
);

but1.addEventListener('click', function () {
    inNum1++;
    console.log(inNum1);
    num1.innerText = inNum1;
    }
);