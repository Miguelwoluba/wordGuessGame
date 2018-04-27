$(document).ready(function () {

    var wordBank = ["wobalubbadubdub", "rick", "morty", "beth","summer", "abradolf lincler", "anatomy park", "bird person", "cognition amplifier", "dream inceptors", "fart", "galactic federation", "gazorpians", "gwendolyn", "ice t", "interdimensional cable", "jerryboree", "jerry",
        "mr.meeseeks", "microverse battery", "needful things", "operation phoenix", "planet music", "mr. poopybutthole", "portal gun", "roy videogame", "scary terry", "shleemypants", "squanchy", "unity", "the vindicators"];
    
    var selectedLetters = [];
    
    var randSelect = Math.floor(Math.random() * (wordBank.length - 1));

    var wordForUse = wordBank[randSelect];

    var linesLeft = wordBank[randSelect].length;

    var indexes = [];

    indexes.length = wordForUse.length;

    var shownLetters = 0;

    var gameEnd = false;

    var guessesLeft = 14;

    var correctWords = 0;

    var timesOutOfGuesses = 0;

    console.log(randSelect);
    console.log(wordForUse);

    var selectedLetters = wordForUse.split('').map(function (lettrs) {
        return "<h3>"+lettrs+"</h3>";
        
    });
    console.log(selectedLetters);

    $(".gameLetters").append(selectedLetters);

    $("#chances").append("You have "+guessesLeft+ " left");
    $('#correct').append("You've completed "+correctWords+ " words");
    $('#incorrect').append("You gone @$#$% "+timesOutOfGuesses+ " times");

    function reloadEvent() {
            reload(true);
    }

    
    if (!gameEnd) {
        $(window).keypress(function (e) {
            var key = String.fromCharCode(e.which);
            if (e.which < 97 || e.which > 122) {
                
                return alert("try again!" + key + " type a lower-case letter you rookie");
                
            };
            console.log(key);
            
            if (/[a-z]/.test(key)) {

                
                if (selectedLetters.hasOwnProperty(key)) {
                    return alert("You've already used that! The portal gun is going to explode");
                }
                else {

                    
                    selectedLetters[key] = key;

                    
                    $('.letters').each(function (x) {
                        if ($(this).html().toLowerCase() === key) {
                            $(this).addClass('charGuessed');
                        }

                    });
                }

                
                var inWord = false;
                $('.gameLetters h3').each(function (x) {
                    if ($(this).html() === key) {
                        shownLetters++;
                        inWord = true;
                        $(this).css('color', 'darkorange');
                    }
                });

              
                if (inWord === false) {
                    guessesLeft--;
                    
                    

                    
                    $('#chances').html('Chances Remaining: ' + guessesLeft);

                    
                    $('#incorrect').html('Incorrect: ' + guessesLeft);
                    

                    
                    if (guessesLeft.length === 0) {
                        gameHasEnded = true;
                        timesOutOfGuesses++;
                       return alert("YOu loooser, Go home with Jerry!!now!");
                       reloadEvent();
                    }
                    
                }

                
                if (shownLetters === wordForUse.length) {
                    gameHasEnded = true;
                    correctWords++;
                    return alert("MO..mo..morty you you- won morty, you WOONNNNNNNNN!! Wobalubadubdub");
                    reloadEvent();
                    
                }



            }

        });

   
    }

   



    
});