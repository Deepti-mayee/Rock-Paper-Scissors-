# Rock-Paper-Scissors 2.0

## Description
This is a simple implementation of the classic Rock-Paper-Scissors game using HTML, CSS, and JavaScript. The user plays against the computer, and the game tracks scores for both the user and the computer.

## How to Play
- The player selects one of the choices: **Rock**, **Paper**, or **Scissors**.
- The computer randomly selects one of these choices as well.
- The winner is determined by the classic rules:
  - Rock beats Scissors
  - Scissors beats Paper
  - Paper beats Rock
- If both the player and the computer select the same choice, the round results in a draw.
- The scores are updated based on the result of each round.

## Features
- User vs. Computer gameplay.
- Random computer choice generation.
- Score tracking for both the user and the computer.
- Visual feedback through messages for wins, losses, and draws.

## Installation
To run the game locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/Deepti-mayee/Rock-Paper-Scissors-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Rock-Paper-Scissors
   ```
3. Open `index.html` in your web browser to start playing.

## Files
- `index.html`: The main HTML file containing the structure of the game.
- `style.css`: Styles for the game board and messages.
- `app.js`: JavaScript logic for the game, handling user input, computer moves, and score calculation.

## Usage
1. Click one of the options (**Rock**, **Paper**, or **Scissors**).
2. The computer will randomly select one of the three choices.
3. The result of the round (win, loss, or draw) will be displayed along with an updated score.
4. Continue playing by making additional selections.

## Code Breakdown
### Main Logic
- The `GencompChoice` function generates a random choice for the computer each round.
- The `playGame` function compares the user's choice with the computer's choice, updates the score, and displays the result.
- The `drawGame` function handles the case where the user's choice matches the computer's choice, resulting in a draw.

### Game Controls
- **Choices**: The user can click on **Rock**, **Paper**, or **Scissors** to make their selection.

## Contributing
Feel free to fork the repository, create a branch, and submit a pull request if you wish to contribute to the project.

## Contact
For any questions or feedback, reach out via [deeptimayee1112@gmail.com].
