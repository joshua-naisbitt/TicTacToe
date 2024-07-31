let isXTurn = true;
let gameOver = false;

function calculateWinner(player) {
    // Tiles
    const UL = document.getElementById("txtUL");
    const UM = document.getElementById("txtUM");
    const UR = document.getElementById("txtUR");

    const ML = document.getElementById("txtML");
    const MM = document.getElementById("txtMM");
    const MR = document.getElementById("txtMR");

    const BL = document.getElementById("txtBL");
    const BM = document.getElementById("txtBM");
    const BR = document.getElementById("txtBR");

    const lblGameState = document.getElementById("lblGameState");
    const lblInvalid = document.getElementById("lblInvalidMove");

    //Check Rows
        //Top row
        if (UL.value == player && UM.value == player && UR.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
        // Middle row
        if (ML.value == player && MM.value == player && MR.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
        // Bottom row
        if (BL.value == player && BM.value == player && BR.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
    //Check Columns
        // Left column
        if (UL.value == player && ML.value == player && BL.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
        // Middle column
        if (UM.value == player && MM.value == player && BM.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
        // Right column
        if (UR.value == player && MR.value == player && BR.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
    //Check Diagonals
        // Upper-Left to Bottom-Right
        if (UL.value == player && MM.value == player && BR.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
        // Bottom-Left to Upper-Right
        if (BL.value == player && MM.value == player && UR.value == player) {
            lblInvalid.innerText = player + " wins!";
            lblGameState.innerText = "Game Over!";
            gameOver = true;
            return;
        }
    //Check Draw
    if (UL.value != "" && UM.value != "" && UR.value != "" &&
        ML.value != "" && MM.value != "" && MR.value != "" &&
        BL.value != "" && BM.value != "" && BR.value != "") {
        lblInvalid.innerText = "Draw!";
        gameOver = true;
    }
}

function updateSquare(sqr) {
    if (gameOver) {
        reset();
        return;
    }
    const lblGameState = document.getElementById("lblGameState");
    const lblInvalid = document.getElementById("lblInvalidMove");

    if (sqr.value == "") {
        //Handle valid move
        lblInvalid.innerText = ""
        if (isXTurn) {
            sqr.value = "X";
            sqr.style.backgroundColor = "lightBlue";
            lblGameState.innerText = "O to move";
            isXTurn = false;

            calculateWinner("X");
        }
        else {
            sqr.value = "O";
            sqr.style.backgroundColor = "pink";
            lblGameState.innerText = "X to move";
            isXTurn = true;
            calculateWinner("O");
        }
    }
    else {
        //Handle invalid move
        lblInvalid.innerText = "Invalid Move!"
    }
}

function reset() {
    const lblGameState = document.getElementById("lblGameState");
    const lblInvalid = document.getElementById("lblInvalidMove");

    lblInvalid.innerText = "";
    lblGameState.innerText = "X to move";

    let sqrs = document.getElementsByClassName("square"); // Creates an HTMLObjectList not an array.

    Array.prototype.forEach.call(sqrs, function (sqr) {
        gameOver = false;
        sqr.style.backgroundColor = "white";
        sqr.value = "";
    });
}