$(document).ready(function() {

    var random = Math.floor(Math.random()*120+19);
    
    $("#numberToGet").text(random);
    
    var crystal1 = Math.floor(Math.random()*12+1);
    var crystal2 = Math.floor(Math.random()*12+1);
    var crystal3 = Math.floor(Math.random()*12+1);
    var crystal4 = Math.floor(Math.random()*12+1);
    
    var userTotal= 0;
    var wins = 0;
    var losses = 0;
    
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    
    function popCrystal(evt, getCrystal) {
        document.getElementById(getCrystal).style.float = "right";
        }
    function reset() {
        random = Math.floor(Math.random()*120+19);
        console.log(random);
        $("#numberToGet").text(random);
        var crystal1 = Math.floor(Math.random()*12+1);
        var crystal2 = Math.floor(Math.random()*12+1);
        var crystal3 = Math.floor(Math.random()*12+1);
        var crystal4 = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#score").text(userTotal);
    }
    
    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }
    
    function loser() {
        alert("You Lose!!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    
    $("#crystal1").on("click", function() {
        userTotal = userTotal + crystal1;
        console.log("New userTotal " + userTotal);
        $("#score").text(userTotal);
    
        if (userTotal === random) {
            winner()
        }
    
        else if (userTotal > random) {
            loser()
        } 
    })
    });