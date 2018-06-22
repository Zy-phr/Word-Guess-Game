/*
=======================================================
Game of Thrones Questions in blurb_display
=======================================================
*/

var gamePhrases = [
    {phrase: "Ghost", blurb: "What is the name of Jon's direwolf?"},
    {phrase: "Rhaegar Targaryen", blurb: "King Robert Baratheon say.. In my dreams, I kill him every night.. To whom is the King referrring to?"},
    {phrase: "Robert Baratheon", blurb: "Who is King of Westeros when the series begins?"},
    {phrase: "Westeros", blurb: "What is the name of the continent on which most of the action of Game of Thrones takes place?"},
    {phrase: "Locke", blurb: "What was the name of the person who chopped off Jaime's right hand?"},
    {phrase: "House Tully", blurb: "What noble house is Catelyn Stark from?"},
    {phrase: "Stannis Baratheon", blurb: "Who said... The Iron Throne is mine by right. All those that deny that are my foes."},
    {phrase: "Dragon glass", blurb: "What can kill a White Walker?"},
    {phrase: "Catelyn Stark", blurb: "Who did Petyr Baelish loved since he was a little child?"},
    {phrase: "Daenerys Targaryen", blurb: "Who is the Mother of Dragons"},
   ]; 
   
   var whiteWalkerMessages = [
     "LEVEL 1!  I WILL PLAY THE GAME!",
     "LEVEL 2!  I WILL TAKE WHAT IS MINE!",
     "LEVEL 3!  HEAR US ROAR!",
     "LEVEL 4!  FIRE & BLOOD!",
     "LEVEL 5!  I WILL DEFEND THE WALL!",
     "LEVEL 6!  WINTER IS COMING!"
   ];

   function getNewPhrase() {

        var choice_idx = Math.floor(Math.random() * gamePhrases.length);

        var results = gamePhrases.splice(choice_idx, 1)[0];
        return results;

    }
   
    var lettersToWinGame = 0;
    var templateArray =[]; /*used to determine if user won*/
    var	remainingGuesses =10;
    var gamesWon =0;
    var gamesLost =0;
    var lettersGuessed =[];
    var gameOver = false;
    var userWon = false;
    var userLost = false;
    var currentPhrase;
    var displayString = '';
    var whiteWalkerlevel = 0;