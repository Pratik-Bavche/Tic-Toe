console.log("Welcome to tic tac toe");
let turn= "X";
let isgameover=false;

//Function to change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//Function to check win
const chcekWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
            isgameover=true;
        }
    })
}

//Main game logic
let boxes=document.getElementsByClassName("box");//return html collection then we convert it into arrays
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
            turn=changeTurn();
            chcekWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})


//Add on clickListener on reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText="";
    });
    turn ="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
})