//author: HossAin Shuvo


let img_rock = document.querySelector('#rock');
let img_paper = document.querySelector('#paper');
let img_scissor = document.querySelector('#scissor');


// // js invocation => Immediately invocked function..
// (function() { alert("Allah is almighty of all"); })();

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
let userInput = '';

function getComputerInput() {
    let randomValue = Math.floor(Math.random() * 10);
    // console.log(randomValue);
    if (randomValue >= 0 && randomValue < 4) {
        console.log(ROCK);
        return ROCK;
    } else if (randomValue >= 4 && randomValue < 7) {
        console.log(PAPER);
        return PAPER;
    } else {
        console.log(SCISSOR);
        return SCISSOR;
    }

}

function myGame(userInput) {
    console.log(userInput);
    let computerInput = getComputerInput();

    if (userInput == computerInput) {
        alert(`Match Draw! Your input was ${userInput} and computer input was ${computerInput}`);
    } else if ((userInput == ROCK && computerInput == SCISSOR) || (userInput == PAPER && computerInput == ROCK) || (userInput == SCISSOR && computerInput == PAPER)) {
        alert(`Congratulations! YOU WON!!!  Your input was ${userInput} and computer input was ${computerInput}`);
    } else {
        alert(`Opps! YOU LOST!!!  Your input was ${userInput} and computer input was ${computerInput}`);
    }
}

img_rock.addEventListener('click', function() {
    userInput = ROCK;
    // alert('ROCK selected!');
    // alert(`${userInput}`);
    // console.log(`output from line 26: ${userInput}`);
    myGame(userInput);
});
// console.log(`output from line 28: ${userInput}`);
img_paper.addEventListener('click', function() {
    userInput = PAPER;
    // alert('PAPER selected!');
    // alert(`${userInput}`);
    myGame(userInput);
});
img_scissor.addEventListener('click', function() {
    userInput = SCISSOR;
    // alert('SCISSOR selected!');
    // alert(`${userInput}`);
    myGame(userInput);
});

console.log(`User input is: ${userInput}`);
console.log(`Computer input is: ${computerInput}`);