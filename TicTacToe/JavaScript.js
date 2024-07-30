let isXTurn = true;

function updateSquare(sqr) {
    const lblGameState = document.getElementById("lblGameState");
    const lblInvalid = document.getElementById("lblInvalidMove");

    if (sqr.value == "") {
        //Handle valid move
        lblInvalid.innerText = ""
        if (isXTurn) {
            sqr.value = "X";
            sqr.style.backgroundColor = "lightBlue";
            isXTurn = false;
        }
        else {
            sqr.value = "O";
            sqr.style.backgroundColor = "pink";
            isXTurn = true;
        }
    }
    else {
        //Handle invalid move
        lblInvalid.innerText = "Invalid Move!"
    }
    if (isXTurn) {
        lblGameState.innerText = "X to move";
    }
    else {
        lblGameState.innerText = "O to move";
    };
}

function reset() {
    let sqrs = document.getElementsByClassName("square"); // Creates an HTMLObjectList not an array.

    Array.prototype.forEach.call(sqrs, function (sqr) {
        // Do stuff here
        sqr.style.backgroundColor = "white";
        sqr.value = "";
    });
}