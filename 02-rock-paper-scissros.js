const scores = {
            wins: 0,
            loss: 0,
            ties : 0
        };

        // Load scores from local storage if available
        let score = JSON.parse(localStorage.getItem('scores')) || {
            wins: 0,
            loss: 0,
            ties : 0    
        };
        updateScores();

        function playGame(playerChoice) {
            const computerChoice = computerPlay();
            let result;

            if (playerChoice === computerChoice) {
                result = "It's a tie!";
            } else if (
                (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
                (playerChoice === 'Paper' && computerChoice === 'Rock') ||
                (playerChoice === 'Scissors' && computerChoice === 'Paper')
            ) {
                result = "You win!";
            } else {
                result = "You lose!";
            }

            if(result === "You win!") {
                scores.wins++;
            } else if (result === "You lose!") {
                scores.loss++;
            } else {
                scores.ties++;
            }   

            localStorage.setItem('scores', JSON.stringify(scores));

            updateScores();

            document.querySelector('.js-results').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `you
            <img src="images/${playerChoice}-emoji.png" class="move-icon">
            <img src="images/${computerChoice}-emoji.png" class="move-icon">
            computer`;
        }

        function computerPlay() {
            const choices = ['Rock', 'Paper', 'Scissors'];
            return choices[Math.floor(Math.random() * 3)];
        }

        function updateScores() {
            const score = JSON.parse(localStorage.getItem('scores')) || {
                wins: 0,
                loss: 0,
                ties : 0    
            };
            document.querySelector('.js-scores').innerText = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;
        }