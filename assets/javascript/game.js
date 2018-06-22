/*
=======================================================
Game of Thrones Questions in blurb_display
=======================================================
*/

var gamePhrases = [
  {phrase: "Ned Stark", blurb: "Who Said...The man who passes the sentence should swing the sword."},
  {phrase: "Jaime Lannister", blurb: "Who Said...The things I do for love."},
  {phrase: "Joffrey", blurb: "Who Said...Everyone is mine to torment."},
  {phrase: "Melisandre", blurb: "Who Said...The night is dark and full of terrors."},
  {phrase: "Lannisters", blurb: "Who Said...A Lannister always pays his debts."},
  {phrase: "Syrio Forel", blurb: "Who Said...What do we say to the God of death?"},
  {phrase: "Tyrion Lannister", blurb: "Who Said...That's what I do: I drink and I know things"},
  {phrase: "Cersei Lannister", blurb: "Who Said...If you ever call me sister again, I'll have you strangled in your sleep."},
  {phrase: "Tywin Lannister", blurb: "Who Said...Any man who must say 'I am the King' is no true King."},
  {phrase: "Samwell Tarly", blurb: "Who Said...I read it in a book."},
  {phrase: "Jon Snow", blurb: "Who Said...If I fall, don't bring me back."},
  {phrase: "Lord Varys", blurb: "Who Said...The big fish eat the little fish and I keep on paddling."},
  {phrase: "Wylis", blurb: "Who Said...Hold the door!"},
  {phrase: "Arya Stark", blurb: "Who Said...Anyone can be killed."},
  {phrase: "Rodrik Cassel", blurb: "Who Said...Gods help you Theon Greyjoy, now you are truly lost."},
  {phrase: "Jorah Mormont", blurb: "Who Said...There’s a beast in every man, and it stirs when you put a sword in his hand."},
  {phrase: "Daenerys Targaryen", blurb: "Who Said...Dracarys."},
  {phrase: "Ramsay Bolton", blurb: "Who Said...If you think this has a happy ending, you haven’t been paying attention."},
  {phrase: "Bran Stark", blurb: "Who Said...Hush, Hodor. No more Hodor-ing!"},
  {phrase: "The Hound", blurb: "Who Said...If any more words come pouring out your c--t mouth"},
  {phrase: "Sansa Stark", blurb: "Who Said...You are going to die tomorrow, Lord Bolton. Sleep well"},
  {phrase: "Olenna Tyrell", blurb: "Who Said...Are you a sheep? No, you're a dragon...be a dragon"},
  {phrase: "Robert Barathron", blurb: "Who Said...I swear to you, sitting a throne is a thousand times harder than winning one"},
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

    var audio = new Audio('assets/sounds/Game_Of_Thrones_Main_Title-576202.mp3');
    var audio_whiteWalker = new Audio('assets/sounds/you_know_nothing.mp3');
    var audio_Nothing = new Audio('assets/sounds/you_know_nothing.mp3');

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
   var display = document.getElementById('phrase_display');
   var blurb_display = document.getElementById('blurb_display');
   var main_image = document.getElementById('main_image');
