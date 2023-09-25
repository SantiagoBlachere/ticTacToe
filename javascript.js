/* global variables */

const gameboard = document.querySelector(".gameboard");
const gameStarter = document.querySelector('.gameStarter');
const playerForm = document.createElement('form');
playerForm.classList.add('formContainer')



/* gameBoard module */

const gameboardModule = (function() {
    const slots = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let slotNumbersX = [];
    let slotNumbersO = [];
    
    
    const paintGameboard = () => {
        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.classList.add('slot');
            slotDiv.classList.add(`${slot}`);
            
            slotDiv.addEventListener('click', () => {
                if (playerOne.turn === true) {
                    if (!slotDiv.innerText && slotDiv.innerText !== 'O') {
                        slotDiv.classList.remove('slot');
                        slotDiv.classList.add('chosen');
                        slotDiv.innerText = 'X';
                        playerOne.turn = false;
                        playerTwo.turn = true;
                    } else {
                        return;
                    }
                } else if (playerTwo.turn === true) {
                    if (!slotDiv.innerText && slotDiv.innerText !== 'X') {
                        slotDiv.classList.remove('slot');
                        slotDiv.classList.add('chosen');
                        slotDiv.innerText = 'O';
                        playerTwo.turn = false;
                        playerOne.turn = true;
                    } else {
                        return;
                    }
                }
                const usedSlots = document.querySelectorAll('.chosen');
                usedSlots.forEach((usedSlot) => {
                    if (usedSlot.innerText === 'X') {
                        let usedSlotArrayX = usedSlot.className.split(' ');
                        let usedSlotNumber = Number(usedSlotArrayX[0]);
                        if (slotNumbersX.includes(usedSlotNumber)) {
                            return;
                        } else {
                            slotNumbersX.push(usedSlotNumber);
                        }
                    } else {
                        let usedSlotArrayO = usedSlot.className.split(' ');
                        let usedSlotNumber = Number(usedSlotArrayO[0]);
                        if (slotNumbersO.includes(usedSlotNumber)) {
                            return;
                        } else {
                            slotNumbersO.push(usedSlotNumber);
                        }
                    }
                });
                if (slotNumbersX.includes(1) && slotNumbersX.includes(2) && slotNumbersX.includes(3)
                    || slotNumbersX.includes(1) && slotNumbersX.includes(4) && slotNumbersX.includes(7)
                    || slotNumbersX.includes(1) && slotNumbersX.includes(5) && slotNumbersX.includes(9)
                    || slotNumbersX.includes(7) && slotNumbersX.includes(8) && slotNumbersX.includes(9)
                    || slotNumbersX.includes(3) && slotNumbersX.includes(5) && slotNumbersX.includes(7)
                    || slotNumbersX.includes(3) && slotNumbersX.includes(6) && slotNumbersX.includes(9)
                    || slotNumbersX.includes(4) && slotNumbersX.includes(5) && slotNumbersX.includes(6)
                ) {
                    playerOne.win();
                    slotNumbersX = [];
                    slotNumbersO = [];
                    createFormModule.selectedPlayer = false;
                    const resetBoardButton = document.createElement('button');
                    resetBoardButton.innerText = 'RESET GAME'
                    gameboard.appendChild(resetBoardButton);
                    const childElements = gameboard.querySelectorAll('div')
                    resetBoardButton.addEventListener('click', () => {
                        childElements.forEach( (el) => {
                            gameboard.removeChild(el);
                            
                        })
                        gameboard.removeChild(resetBoardButton)
                        
                        createFormModule.createForm();
                    })
                    
                    
                    
                } else if (
                    slotNumbersO.includes(1) && slotNumbersO.includes(2) && slotNumbersO.includes(3)
                    || slotNumbersO.includes(1) && slotNumbersO.includes(4) && slotNumbersO.includes(7)
                    || slotNumbersO.includes(1) && slotNumbersO.includes(5) && slotNumbersO.includes(9)
                    || slotNumbersO.includes(7) && slotNumbersO.includes(8) && slotNumbersO.includes(9)
                    || slotNumbersO.includes(3) && slotNumbersO.includes(5) && slotNumbersO.includes(7)
                    || slotNumbersO.includes(3) && slotNumbersO.includes(6) && slotNumbersO.includes(9)
                    || slotNumbersO.includes(4) && slotNumbersO.includes(5) && slotNumbersO.includes(6)
                ) {
                    playerTwo.win();
                    slotNumbersX = [];
                    slotNumbersO = [];
                    createFormModule.selectedPlayer = false;
                    const resetBoardButton = document.createElement('button');
                    resetBoardButton.innerText = 'RESET GAME'
                    gameboard.appendChild(resetBoardButton);
                    const childElements = gameboard.querySelectorAll('div')
                    resetBoardButton.addEventListener('click', () => {
                        childElements.forEach( (el) => {
                            gameboard.removeChild(el);
                            
                        })
                        gameboard.removeChild(resetBoardButton);
                        
                        createFormModule.createForm();
                    })
                    
                    
                }
            });
            gameboard.appendChild(slotDiv);
        });
    };

    return { slots, paintGameboard };
})();

/* player factory function / creation*/
const Player = (figure, boolean, playerName) => {
    const figureChosen = figure;
    const turn = boolean;
    const win = () => {
        alert(`${playerName} won!!!`);
    };
    return { figureChosen, turn, win };
};
const playerOne = Player('x', true, 'X');
const playerTwo = Player('o', false, 'O');


/* form maker module */

const createFormModule = (function() {
let selectedPlayer = false;
const createForm = () => {

playerForm.innerHTML = '';
    
/** PLAYER 1 RADIO */
const radioInputOne = document.createElement('input');
radioInputOne.setAttribute('type', 'radio');
radioInputOne.setAttribute('id', 'xPlayer');
radioInputOne.setAttribute('name', 'player');
radioInputOne.setAttribute('value', `X`);
playerForm.appendChild(radioInputOne);

const radioInputOneLabel = document.createElement('label');
radioInputOneLabel.setAttribute('for', 'xPlayer');
radioInputOneLabel.innerText = 'PLAYER X STARTS';

playerOneContainer = document.createElement('div');
playerOneContainer.classList.add('playerOne')
playerOneContainer.appendChild(radioInputOneLabel);
playerOneContainer.appendChild(radioInputOne);

playerForm.appendChild(playerOneContainer);

/** PLAYER 2 RADIO */
const radioInputTwo = document.createElement('input');
radioInputTwo.setAttribute('type', 'radio');
radioInputTwo.setAttribute('id', 'oPlayer');
radioInputTwo.setAttribute('name', 'player');
radioInputTwo.setAttribute('value', `O`);
playerForm.appendChild(radioInputTwo);

const radioInputTwoLabel = document.createElement('label');
radioInputTwoLabel.setAttribute('for', 'oPlayer');
radioInputTwoLabel.innerText = 'PLAYER O STARTS';

playerTwoContainer = document.createElement('div');
playerTwoContainer.classList.add('playerTwo')
playerTwoContainer.appendChild(radioInputTwoLabel)
playerTwoContainer.appendChild(radioInputTwo)

playerForm.appendChild(playerTwoContainer);

/** SUBMIT */

const startGameButton = document.createElement('input');
startGameButton.setAttribute('type', 'submit');
startGameButton.setAttribute('value', 'Start Game');
playerForm.appendChild(startGameButton);
startGameButton.innerText = 'START GAME';
const handleSubmit = (e) => {
    e.preventDefault();
    selectedPlayer = document.querySelector('input[name="player"]:checked');
    
    if (selectedPlayer) {
        
        const selectedValue = selectedPlayer.value;
        
        if (selectedValue === 'X') {
            playerOne.turn = true;
            playerTwo.turn = false;
            playerForm.remove();
            
        } else {
            playerOne.turn = false;
            playerTwo.turn = true;
            playerForm.remove();
            
        }
        
        
        gameboardModule.paintGameboard();
    } else {    
        
        alert('Select which player starts!');
    }
    playerForm.removeEventListener('submit', handleSubmit);

}
playerForm.addEventListener('submit', handleSubmit);
gameStarter.appendChild(playerForm);
}
createForm()

return { createForm, selectedPlayer }

})();



