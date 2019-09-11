$(document).ready(function () {
    
        var goal;
        var myScore;
        var wins = 0;
        var losses = 0;
        var gem1Num;
        var gem2Num;
        var gem3Num;
        var gem4Num;
    
        function newNumbers() {
            goal = Math.floor(Math.random() * 110) + 20;
            gem1Num = Math.ceil(Math.random() * 12);
            gem2Num = Math.ceil(Math.random() * 12);
            gem3Num = Math.ceil(Math.random() * 12);
            gem4Num = Math.ceil(Math.random() * 12);
        }
    
        function newGame() {
            newNumbers();
            myScore = 0;
            $("#goal").html(goal);
            $("#myScore").html(myScore);
            $("#gem1").attr("data-gemvalue", gem1Num);
            $("#gem2").attr("data-gemvalue", gem2Num);
            $("#gem3").attr("data-gemvalue", gem3Num);
            $("#gem4").attr("data-gemvalue", gem4Num);
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#winOrLose").text("")
            //console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
        }
    
        function youWin() {
            wins++;
            $("#wins").text(wins);
        }
    
        function youLose() {
            losses++;
            $("#losses").text(losses);
        }
    
        newGame();
    
        // Function to add the crystal values together
        $(".btn").on("click", function() {
            if (myScore >= goal) {
                return;
            }
    
            var gemValue = $(this).attr("data-gemvalue");
            gemValue = parseInt(gemValue);
            myScore += gemValue;
            $("#myScore").html(myScore);
    
            if (myScore === goal) {
                youWin();
                alert("YOU WIN! play again?");
                newGame();
            } else if (myScore > goal) {
                youLose();
                alert("YOU LOSE! play again?");
                newGame();
            }
        });
    
    });
