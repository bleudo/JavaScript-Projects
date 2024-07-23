let buttonColours = ['red','blue','green','yellow']

let gamePattern = []

let userClickedPattern = [];

let started = false;

let level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor)
    animatePress(userChosenColor)

    checkAnswer(userClickedPattern.length-1)
});


function checkAnswer(currentLevel){
    
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        
        console.log("success");
        
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
            
        }
        
    }else{
        console.log("wrong")

        playSound("wrong")

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200)

        $("#level-title").text("Game Over, Press Any Key to Restart")

        startOver()
    }
}

function nextSequence(){
    
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    let audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    audio.play();

    playSound(randomChosenColour);

}



function animatePress(currentColour){
    
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function(){
        $("#" + currentColour).removeClass('pressed');
    }, 100);
}

function playSound(name){    
    let audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}