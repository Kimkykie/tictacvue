new Vue({
    el: '#main',
    data: {
        gameisRunning: false,
        playerTurn: 'X',
        compTurn: 'O',
        currentPlayer: '',
        moves: 1
    },
    methods: {
        //Player Choose Turn X or O
        chooseTurn(e) {
            //Player's Turn is X and Computer Turn O
            if (e.target.id === 'xturn') {
                this.playerTurn = 'X';
                this.compTurn = 'O';
                //Player's Turn is O and Computer Turn X
            } else if (e.target.id === 'oturn') {
                this.playerTurn = 'O';
                this.compTurn = 'X';
            }
            this.gameisRunning = true;
            this.firstMove();
            this.setCurrentPlayer(this.playerTurn);
        },
        // The First Move set by default to Computers turn on 5th div
        firstMove() {
            document.getElementById('5').innerHTML = this.compTurn;
            $('#5').removeAttr('onClick');
        },
        //Function to set the current player
        setCurrentPlayer(curr) {
            this.currentPlayer = curr;
        },
        // Icon
        seticon(id) {
            if (this.currentPlayer === this.playerTurn) {
                $('#' + id).html(this.playerTurn);
                this.gameStatus();
                console.log(this.currentPlayer);
                this.setCurrentPlayer(this.compTurn);
            } else if (this.currentPlayer === this.compTurn) {
                $('#' + id).html(this.compTurn);
                this.gameStatus();
                console.log(this.currentPlayer);
                this.setCurrentPlayer(this.playerTurn);
            }

            this.moves++;
            this.checkDraw();

            if (this.currentPlayer === this.compTurn) {
                this.compPlay();
            }
        },

        //Computer turns
        compPlay() {
            switch (true) {
                case $('#1').html() !== this.playerTurn && $('#1').html() !== this.compTurn:
                    this.seticon('1');
                    break;

                case $('#2').html() !== this.playerTurn && $('#2').html() !== this.compTurn:
                    this.seticon('2');
                    break;

                case $('#3').html() !== this.playerTurn && $('#3').html() !== this.compTurn:
                    this.seticon('3');
                    break;

                case $('#4').html() !== this.playerTurn && $('#4').html() !== this.compTurn:
                    this.seticon('4');
                    break;

                case $('#5').html() !== this.playerTurn && $('#5').html() !== this.compTurn:
                    this.seticon('5');
                    break;

                case $('#6').html() !== this.playerTurn && $('#6').html() !== this.compTurn:
                    this.seticon('6');
                    break;

                case $('#7').html() !== this.playerTurn && $('#7').html() !== this.compTurn:
                    this.seticon('7');
                    break;

                case $('#8').html() !== this.playerTurn && $('#8').html() !== this.compTurn:
                    this.seticon('8');
                    break;

                case $('#9').html() !== this.playerTurn && $('#9').html() !== this.compTurn:
                    this.seticon('9');
                    break;
            }
        },
        //Check Game Status
        gameStatus() {
            var player;

            if (this.currentPlayer === this.playerTurn) {
                player = this.playerTurn;
            } else if (this.currentPlayer === this.compTurn) {
                player = this.compTurn;
            }

            switch (true) {
                case $('#1').html() === player && $('#2').html() === player && $('#3').html() === player:
                    this.showPosition('#1', '#2', '#3');
                    break;

                case $('#4').html() === player && $('#5').html() === player && $('#6').html() === player:
                    this.showPosition('#4', '#5', '#6');
                    break;

                case $('#7').html() === player && $('#8').html() === player && $('#9').html() === player:
                    this.showPosition('#7', '#8', '#9');
                    break;

                case $('#1').html() === player && $('#4').html() === player && $('#7').html() === player:
                    this.showPosition('#1', '#4', '#7');
                    break;

                case $('#2').html() === player && $('#5').html() === player && $('#8').html() === player:
                    this.showPosition('#2', '#5', '#8');
                    break;

                case $('#3').html() === player && $('#6').html() === player && $('#9').html() === player:
                    this.showPosition('#3', '#6', '#9');
                    break;

                case $('#1').html() === player && $('#5').html() === player && $('#9').html() === player:
                    this.showPosition('#1', '#5', '#9');
                    break;

                case $('#3').html() === player && $('#5').html() === player && $('#7').html() === player:
                    this.showPosition('#3', '#5', '#7');
                    break;

                default:
                    this.checkDraw();

            }
        },
        //Show position
        showPosition(x, y, z) {
            x = $(x);
            y = $(y);
            z = $(z);

            x.addClass('win');
            y.addClass('win');
            z.addClass('win');

            setTimeout(this.reset, 1500);

        },
        //Reset after game
        reset() {
            this.gameisRunning = false;
            if (confirm('Do you want to replay game?')) {
                location.reload();
            } else {
              $('.reload').show();
              $('.content').hide();
            }
        },
        //Check if it ends in a draw
        checkDraw() {
            if (this.moves === 9) {
                setTimeout(this.reset, 1500);
            }
        },
        //Reload the Page
        reload(){
          location.reload();
        }
    }
});
