var flipped = false;
var angle = 0;
var numClicks = 0;


$("body").ready(function(){
  $(".heart").click();
  explode(explode());
});

function explode(fn){
  setTimeout(function(){
    $(".heart").click();
    setTimeout(function(){
      $(".heart").click();
    }, 1000);
  }, 1000);
}

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

$("#flip").click(function(event) {
  if(flipped) {
    return;
  }

$(".card").css("transform", "rotateY(180deg)");
$(".card").css("transition", "all 1s cubic-bezier (0, .75, .25, 1)");

  // $("#confetti-holder").remove();
  flipped = true;
});

$(".heart").on('click', function(){
  confetti({
    particleCount: 300,
    shapes: ["square"],
    ticks: 190,
    spread: 70,
    origin: {
      y: 0.4
    }
  });
});

$("#prize").on('change', function(){
  let selected = $(this).val(); 
  let comment = ["Boring", "I hear thats dangerous", "Are you insured?", "yawn"  ].random();
  let replace = ["cash"];


  if($.inArray(selected, replace) != -1){
    comment = "Good choice";
    $("#final").fadeIn("slow", function(){
      $(this).show();
    });
  } else {
    if(numClicks >= replace.length ){
      numClicks = 0;
    }
    $(this).find(":selected").remove();
    $(this).find("#none").text("Try again");
    numClicks++;
  }

  $(".guess").text(comment).show();
});

$("#final").click(function(){
  $(".card").hide(1000);
});
