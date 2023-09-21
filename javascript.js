const gameboardModule = (function() {
    const slots = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const slotNumbersX = [];
    const slotNumbersO = [];

    /*
    1 -> +  2,3 y 4 y 7 y 5 y 9
    2 -> + 5,8 y 
    3 -> + 6,9
    */
    const paintGameboard = () => {
        
        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.classList.add('slot');
            slotDiv.classList.add(`${slot}`)
            startGameButton.remove()
            slotDiv.addEventListener('click', () => {
                
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
                const usedSlots = document.querySelectorAll('.chosen');
                
                
                usedSlots.forEach((usedSlot) => {
                    if (usedSlot.innerText === 'X') {
                        let usedSlotArrayX = usedSlot.className.split(' ');
                        let usedSlotNumber = Number(usedSlotArrayX[0])
                        if (slotNumbersX.includes(usedSlotNumber)) {
                            return
                        } else {
                            slotNumbersX.push(usedSlotNumber);
                            
                        }
                        
                        
                        
                    } else {
                        let usedSlotArrayO = usedSlot.className.split(' ');
                        
                        let usedSlotNumber = Number(usedSlotArrayO[0])
                        if (slotNumbersO.includes(usedSlotNumber)) {
                            return
                        } else {
                            slotNumbersO.push(usedSlotNumber);
                            
                        }
                        
                    }
                    
                    
                })
            console.log(slotNumbersX)    
            if (slotNumbersX.includes(1) && slotNumbersX.includes(2) && slotNumbersX.includes(3)
             || slotNumbersX.includes(1) && slotNumbersX.includes(4) && slotNumbersX.includes(7)
              || slotNumbersX.includes(1) && slotNumbersX.includes(5) && slotNumbersX.includes(9)
              || slotNumbersX.includes(7) && slotNumbersX.includes(8) && slotNumbersX.includes(9)
              || slotNumbersX.includes(3) && slotNumbersX.includes(5) && slotNumbersX.includes(7)
               || slotNumbersX.includes(3) && slotNumbersX.includes(6) && slotNumbersX.includes(9)) {
                playerOne.win();
            }  else if (
                slotNumbersO.includes(1) && slotNumbersO.includes(2) && slotNumbersO.includes(3)
             || slotNumbersO.includes(1) && slotNumbersO.includes(4) && slotNumbersO.includes(7)
              || slotNumbersO.includes(1) && slotNumbersO.includes(5) && slotNumbersO.includes(9)
              || slotNumbersO.includes(7) && slotNumbersO.includes(8) && slotNumbersO.includes(9)
              || slotNumbersO.includes(3) && slotNumbersO.includes(5) && slotNumbersO.includes(7)
               || slotNumbersO.includes(3) && slotNumbersO.includes(6) && slotNumbersO.includes(9)
            ) {
                playerTwo.win()
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
    return { figureChosen, turn, win }
}
const playerOne = Player('x', true, 'coscu')
const playerTwo = Player('o', false, 'anticoscu')
const gameboard = document.querySelector(".gameboard");
const gameStarter = document.querySelector('.gameStarter')



const startGameButton = document.createElement('button');
startGameButton.innerText = 'START GAME'
startGameButton.addEventListener('click', gameboardModule.paintGameboard);
gameStarter.appendChild(startGameButton)
