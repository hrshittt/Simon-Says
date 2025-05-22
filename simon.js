let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["yellow" , "red" , "purple" , "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        console.log("started");

        levelup();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq = [];             // jese hi level up hoga vese user sequence reset ho jaega mtlb user sequence khali ho jaega kyunki user ko vapis shuru se button ko press karna hai 
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = (Math.floor(Math.random()*3));
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq)
    gameFlash(randBtn);
    
}

function checkAns(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup , 1000);
        }
    }
        else{
            h2.innerHTML = `Game Over! Your Score was <b> ${level} </b> <br> Press any Key to Start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            },150);
            reset();
            myscore();
        }
    
}

function btnpress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}


function reset(){
    started = false;
    gameseq=[];
    userseq=[]
    level = 0;
}


