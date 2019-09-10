$(document).ready(function () {



    var goalAmount = Math.floor((Math.random() * 120) + 19);
    var gemAmount = Math.floor((Math.random() * 12) + 1);


    $(".btn").on("click", function () {
        // console.log("Gem Amount", gemAmount);
        $("#myPoints").html(gemAmount);
        $(goal).html("Target: " + goalAmount);
        alert("You clicked me!");
    });
});
