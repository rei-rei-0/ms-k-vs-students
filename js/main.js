class TicTacToeGame{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }
    initializeBoxes(){
        let b1 = document.getElementById('b1').value
        let b2 = document.getElementById('b2').value
        let b3 = document.getElementById('b3').value
        let b4 = document.getElementById('b4').value
        let b5 = document.getElementById('b5').value
        let b6 = document.getElementById('b6').value
        let b7 = document.getElementById('b7').value
        let b8 = document.getElementById('b8').value
        let b9 = document.getElementById('b9').value
    }
    addMark(clicked_id){
        if(this.player1){
            document.getElementById(clicked_id).value = 'X'
            document.getElementById(clicked_id).disabled = true;
            document.getElementById(clicked_id).style.backgroundColor = 'lavender';  
            this.player1 = false
            this.player2 = true
            this.initializeBoxes()
            this.winCondition()
        }
        else {
            document.getElementById(clicked_id).value = 'O'
            document.getElementById(clicked_id).disabled = true;
            this.player1 = true
            this.player2 = false
            this.initializeBoxes()
            this.winCondition()
        }
    }
    winCondition() {
        if(b1.value == 'X' && b2.value == 'X' && b3.value == 'X' || b4.value == 'X' && b5.value == 'X' && b6.value == 'X' || b7.value == 'X' && b8.value == 'X' && b9.value == 'X' ||
        b1.value == 'X' && b4.value == 'X' && b7.value == 'X' || b2.value == 'X' && b5.value == 'X' && b8.value == 'X'|| b3.value == 'X' && b6.value == 'X' && b9.value == 'X'
        || b1.value == 'X' && b5.value == 'X' && b9.value == 'X' || b3.value == 'X' && b5.value == 'X' && b7.value == 'X'){
            document.querySelector('h2').innerText = 'Player 1 win'
            this.showWinner()
        }
        else if(b1.value == 'O' && b2.value == 'O' && b3.value == 'O' || b4.value == 'O' && b5.value == 'O' && b6.value == 'O' || b7.value == 'O' && b8.value == 'O' && b9.value == 'O' ||
        b1.value == 'O' && b4.value == 'O' && b7.value == 'O' || b2.value == 'O' && b5.value == 'O' && b8.value == 'O'|| b3.value == 'O' && b6.value == 'O' && b9.value == 'O'
        || b1.value == 'O' && b5.value == 'OO' && b9.value == 'O' || b3.value == 'O' && b5.value == 'O' && b7.value == 'O'){
            document.querySelector('h2').innerText = 'Player 2 win'
            this.showWinner()
        }//need no one wins to works
        if(document.getElementsByClassName('box') - 1){
            document.querySelector('h2').innerText = 'Noone wins'
            this.showWinner()
        }
        
    }
    showWinner(){
        if(document.querySelector('h2').innerText){
            document.querySelector('.hidden').classList.toggle('hidden')
            let boxes =document.getElementsByClassName('box')
            for(let i =0; i<boxes.length;i++){
                boxes[i].disabled = true;
            }
        }
    }
    playAgain() {
        location.reload();
    }

}

let ttt = new TicTacToeGame(true, false)