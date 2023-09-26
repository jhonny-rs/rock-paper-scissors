let compMove = "";
let result = "";

function rock() {
    const randomNumber = Math.random();
    const yourMove = "Rock";

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        compMove = "Rock";
        result = "Tie.";
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
        compMove = "Paper";
        result = "You lose.";
    } else if (randomNumber >= 2/3 && randomNumber <= 1) {
        compMove = "Scissors";
        result = "You win.";
    }

    alert(`You picked ${yourMove}, computer picked ${compMove}, ${result}`)

}

function paper() {
    const randomNumber = Math.random();
    const yourMove = "Paper";

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        compMove = "Rock";
        result = "You win.";
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
        compMove = "Paper";
        result = "Tie.";
    } else if (randomNumber >= 2/3 && randomNumber <= 1) {
        compMove = "Scissors";
        result = "You lose.";
    }

    alert(`You picked ${yourMove}, computer picked ${compMove}, ${result}`)
}

function scissors() {
    const randomNumber = Math.random();
    const yourMove = "Scissors";

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        compMove = "Rock";
        result = "You lose.";
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
        compMove = "Paper";
        result = "You win.";
    } else if (randomNumber >= 2/3 && randomNumber <= 1) {
        compMove = "Scissors";
        result = "Tie.";
    }

    alert(`You picked ${yourMove}, computer picked ${compMove}, ${result}`)
}