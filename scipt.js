const computerText = document.querySelector('.computer');
const playerText = document.querySelector('.player');
const select = document.querySelector('.select');
const resultDisplay = document.querySelector('.resultDisplay');
let computerValue;

const sections = [
    {
        value:'rock',
        emojie:'🗿',
        destroy:'scissors'
    },
    {
        value:'paper',
        emojie:'🧻',
        destroy:'rock'
    },
    {
        value:'scissors',
        emojie:'✂️',
        destroy:'paper'
    }
];


function computer(){
    let randomValue = randomValueGenerator();
    computerValue = sections[randomValue];
    
    computerText.innerHTML = computerValue.emojie;
}

for(let section of sections){
    let playerValue = section;
    const span = document.createElement('span');
    span.innerHTML = section.emojie;
    span.setAttribute('class','section');
    select.appendChild(span);

    span.addEventListener('click',e=>{
        playerText.innerHTML = section.emojie;
        computer();

        switch(playerValue.value + computerValue.value){
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                resultDisplay.innerHTML = 'You win!!!';
                break;
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                resultDisplay.innerHTML = 'You lose...';
                break;   
            default:
                resultDisplay.innerHTML = 'Try Again';
        }
            
    })
}


function randomValueGenerator(){
    return Math.floor(Math.random()*3);

}