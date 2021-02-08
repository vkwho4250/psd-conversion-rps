

const hand = ["rock","paper","scissors"];

var score = 0;
var playerHand="";
var computerHand="";
var inGame = false;



$("#rule-btn, #close-icon").click(function(){
  $("#rule-container").toggleClass("hide");
});


$("#play-again").click(function(){
  $("#computer-win, #player-win, #result-text-display, #player-display ."+playerHand+", #computer-display ."+computerHand).addClass("hide");
  $("#picked-page").toggleClass("hide");
  $("#player-page").toggleClass("hide");
  inGame = false;
})


$(".triangle-buttons .action").click(function(){
  if (inGame == false){
    inGame = true;

    playerHand = $(this).attr("id");
    computerAction();

    var result= checkGame();
    $("#result-text-display h1").text(result);

    $("#picked-page").toggleClass("hide");
    $("#player-page").toggleClass("hide");

    setTimeout(function(){
      $("#player-display ."+playerHand).toggleClass("hide");

      setTimeout(function(){
        $("#computer-display ."+computerHand).toggleClass("hide");

        setTimeout(function(){
          $("#result-text-display").toggleClass("hide");

          if (result == "You Win!"){
            score++;
            $("#score").text(score);
            $("#player-win").toggleClass("hide");
          } else if (result == "You Lose!"){
            $("#computer-win").toggleClass("hide");
          };
        }, 300)
      }, 300)

    }, 300)
  }
});

function checkGame(){
  if (playerHand == "rock" && computerHand == "scissors" || playerHand == "paper" && computerHand == "rock" || playerHand == "scissors" && computerHand == "paper"){
    return "You Win!"
  }
  else if (playerHand == computerHand){
    return "Tied!"
  }
  else{
    return "You Lose!"
  }
}

function computerAction (){
  computerHand = hand[Math.floor(Math.random()*3)];
  console.log("Computer: "+computerHand);
}
