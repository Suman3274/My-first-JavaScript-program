let boxes = document.querySelectorAll(".inner-game-boxes");
let restart = document.querySelector(".restart");
let winnerMsg = document.querySelector(".winnerMsg");

let intialTurn = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(intialTurn === true){
            box.innerText = "X";
            box.style.color = "orange";
            intialTurn = false;
        }else {
            box.innerText = "O";
            box.style.color = "lightblue";
            intialTurn = true;
        }
        box.disabled = true;

        checkWinner();
    })
})


const disableBtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () => {
    let isDraw = true; // Assume it's already a draw initially

    for(let eachIndex of winPatterns){
        let pos1Val = boxes[eachIndex[0]].innerText;
        let pos2Val = boxes[eachIndex[1]].innerText;
        let pos3Val = boxes[eachIndex[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winnerMsg.innerText = `Player ${pos1Val} won`;
                disableBtns();
                return; // return early if we have a winner
            }
        }
    }
    // checking if all the boxes are filled or not
    boxes.forEach((box) => {
        if(box.innerText === ""){
            isDraw = false;
        }
    })

    if(isDraw === true){
        winnerMsg.innerText = "It's a draw"
        disableBtns();
    }
}


const enableBtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        winnerMsg.innerText = "";
    }    
}

restart.addEventListener("click", enableBtns);


// let draw = () => {
//     for(let eachIndex of boxes){
//         let pos1Val = boxes[eachIndex[0]].innerText;
//         let pos2Val = boxes[eachIndex[1]].innerText;
//         let pos3Val = boxes[eachIndex[2]].innerText;
//         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if(pos1Val != pos2Val != pos3Val){
//                 winnerMsg.innerText = "It's a draw";
//             }
            
//         }
//     }
// }












































































