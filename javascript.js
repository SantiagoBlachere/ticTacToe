const gameboardModule = (function() {
    const slots = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    const paintGameboard = () => {
        
        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.classList.add('slot');
            slotDiv.classList.add(`${slot}`)
            slotDiv.addEventListener('click', () => {
                console.log(playerOne.turn)
                console.log(slotDiv.innerText)
                if (playerOne.turn === true) {
                        if (!slotDiv.innerText && slotDiv.innerText !== 'O') {
                            slotDiv.classList.remove('slot');
                            slotDiv.classList.add('chosen');
                            slotDiv.innerText = 'X'
                            playerOne.turn = false;
                            playerTwo.turn = true;
                            console.log(playerOne.turn);
                        } else {
                            return
                        }
                        
                    
                } else if (playerTwo.turn === true) {
                        if (!slotDiv.innerText && slotDiv.innerText !== 'X') {
                            slotDiv.classList.remove('slot');
                            slotDiv.classList.add('chosen');
                            slotDiv.innerText = 'O';
                            playerTwo.turn = false;
                            playerOne.turn = true;
                        } else {
                            return
                        }
                        
                    
                }
                
                  
                

            })
            gameboard.appendChild(slotDiv);
        });
    }
    return { slots, paintGameboard }

})();

const Player = (figure, boolean, name) => {
    const figureChosen = figure;
    const turn = boolean;
    const win = () => {
        alert(`${name} won!!!`)
    }
    return { figureChosen, turn}
}
const playerOne = Player('x', true)
const playerTwo = Player('o', false)
const gameboard = document.querySelector(".gameboard");
const gameStarter = document.querySelector('.gameStarter')



const startGameButton = document.createElement('button');
startGameButton.innerText = 'START GAME'
startGameButton.addEventListener('click', gameboardModule.paintGameboard);
gameStarter.appendChild(startGameButton)
