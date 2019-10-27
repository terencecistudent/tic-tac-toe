$(document).ready(function() {

    var move = 1;
    var play = true;

    // Getting X and O's to show on table when clicked.
    $("table tr td").click(function() {
        if($(this).text()== "" && play) {
            if( (move % 2) == 1) {
                $(this).append("X")
                $(this).css("color", "green");
            } else {
                $(this).append("O")
                $(this).css("color", "red");
            }

            move++;

            // Messages for winning and not winning.
            if (pickWinner() != -1 && pickWinner() != "") {
                // If winner is X
                if (pickWinner() == "X") {
                    $("body").append(`<div class="winner"><span>Winner is</span> X!</div>`);
                    $("body").append(`<button onclick="location.reload()" class="btn btn-success btn-lg">Play Again</button>`);
                    $(".winner").css("background-color", "#61892f");
                    $("button").css("color", "#white");
                } else {
                    $("body").append(`<div class="winner"><span>Winner is</span> O!</div>`);
                    $("body").append(`<button onclick="location.reload()" class="btn btn-danger btn-lg">Play Again</button>`);
                    $(".winner").css("background-color", "red");
                    $("button").css("color", "white");
                }

                play = false;
            }
        }
    })

    /*-------------------------------------------function created to pick a winner-----*/
    function pickWinner() {
        box1 = $("table tr:nth-child(1) td:nth-child(1)").text();
        box2 = $("table tr:nth-child(1) td:nth-child(2)").text();
        box3 = $("table tr:nth-child(1) td:nth-child(3)").text();
        box4 = $("table tr:nth-child(2) td:nth-child(1)").text();
        box5 = $("table tr:nth-child(2) td:nth-child(2)").text();
        box6 = $("table tr:nth-child(2) td:nth-child(3)").text();
        box7 = $("table tr:nth-child(3) td:nth-child(1)").text();
        box8 = $("table tr:nth-child(3) td:nth-child(2)").text();
        box9 = $("table tr:nth-child(3) td:nth-child(3)").text();

        // checks rows
        if ((box1 == box2) && (box2 == box3)) {
            return box3;
        } else if ((box4 == box5) && (box5 == box6)) {
            return box6;
        } else if ((box7 == box8) && (box8 == box9)) {
            return box9;
        }

        // checks columns
        else if ((box1 == box4) && (box4 == box7)) {
            return box7;
        } else if ((box2 == box5) && (box5 == box8)) {
            return box8;
        } else if ((box3 == box6) && (box6 == box9)) {
            return box9;
        }

        // checks the diagonal rows
        else if ((box1 == box5) && (box5 == box9)) {
            return box9;
        } else if((box3 == box5) && (box5 == box7)) {
            return box7;
        }

        // if there is no winner
        return - 1;
    }
});