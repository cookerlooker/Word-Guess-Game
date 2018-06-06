/*
    HANGMAN SOURCE
    ROCHELLE SCHOFIELD
    GT CODING BOOTCAMP 06/09/2018
*/
$(document).ready(function () {

});



$.getJSON('/assets/javascript/quizbank.json', function (data) {
    console.log(data);
    var questionBank = [];
    for (i = 0; i < data.wordlist.length; i++) {
        questionBank[i] = [];
        questionBank[i][0] = data.wordlist[i].word;
        questionBank[i][1] = data.wordlist[i].clue;
    }
    titleScreen();
})//getJSON

    function titleScreen(){
         $('#gameContent').append('<div id="gameTitle">Hangman Fashion Icons</div><div id="startButton" class="button">Press Any Key To Get Started</div>');
         $('#startButton').on("click",function (){gameScreen()});

    function gameScreen(){
        $('#gameContent').empty();
        $('#gameContent').append('<div id="pixHolder"><img id="hangman" src="man.png"></div>');	
        $('#gameContent').append('<div id="wordHolder"></div>');	
        $('#gameContent').append('<div id="clueHolder"></div>');	
        $('#gameContent').append('<div id="guesses">Previous guesses:</div>');	
        $('#gameContent').append('<div id="feedback"></div>');	
                
        getWord();
        var numberOfTiles=currentWord.length;
        wrongAnswerCount=0;
        previousGuesses=[];
                 
        for(i=0;i<numberOfTiles;i++){		
            $('#wordHolder').append('<div class="tile" id=t'+i+'></div>');	
        }
        
        $('#clueHolder').append("HINT: "+currentClue);
     
        $(document).on("keyup",handleKeyUp);
    }//gamescreen

    function getWord(){
        var rnd=Math.floor(Math.random()*questionBank.length);
        currentWord=questionBank[rnd][0];
        currentClue=questionBank[rnd][1];
        questionBank.splice(rnd,1); 
        wordArray=currentWord.split("");			
    }//getword
       
    




	
			
}//display game


