var stage;
var gamemode = ["odd", "even", "square", "prime"];
var random;
var canvasH;
var canvasW;
var holes = [];
var moles = [];
var help = [];
var labels = [];
var helptexts = [];
var score;
var speedchange;
var difficultyindex;
var moleindex;
var resets = [];
var helptype = [0,1,2,3];
var gametype = ["gamestart","menu","help menu", "helptext displaying", "difficulty select"];
var oldmole;
var randomlist = [0,1,2,3,4,5,6,7,8];
var basicnumbers = [];
var titles = [];
var backtms = [];
var backs = [];
var offsetx  = -7.5
var offsety = -80
var speed;
var difficulties = [];
var difficultyx = [200, 475, 800];
var difficulty = ["easy", "normal", "hard"];
var labelindex;
var helpcontent = ["The odd numbers are all the numbers that exist \n that cannot be divided by 2. \n EG 3 is an odd number as if you have 3 blocks \n you can’t split them into 2 piles of the same amount \n each. 4 is not an odd number as if you have 4 blocks \n you could split them into 2 piles of the same amount \n each.","The even numbers are all the numbers that exist \n that can be divided by 2. \n EG 4 is an even number as if you have 4 blocks \n you can split them into 2 piles of the same amount \n each. 3 is not an even number as if you have 3 blocks \n you can’t split them into 2 piles of the same amount \n each.","Square numbers are numbers that have been \n made by multiplying a whole number by itself. \n 2 EG 4 is a square number as it can be made \n by multiplying a whole number by itself, in this \n case that number is 2 (2x2=4). 5 is not a square \n number as it cannot be made by multiplying a whole \n number by itself.","Prime numbers are numbers can only be divided \n by themselves and by 1 to get an answer that is \n a whole number.  EG 7 is a prime number as the \n only numbers that it can be divided by to make \n a whole number is 7 (itself) and by 1. 8 is not a \n prime number as it can be divided by 1, 2 4 and \n eight to make a whole number. NOTE- 1 is not \n a prime number even though it seems to meet \n the requirements for a number to be a prime \n number.  This is because a prime number must be \n able to divide by 2 numbers, itself and 1. The \n number 1 can only divide by 1 number as itself and \n 1 are the same thing."];
var scale;
var scoretext = [];
var positions= [[[100,100], [450,100], [800, 100]],[[100,300], [450,300], [800, 300]],[[100,500], [450,500], [800, 500]]]
var lpositions = [[[275,350],[600,350]],[[275,550],[600,550]]]

var startGame = function(){
	utils.getRandom()

score = 0;
speed = 1500;

spawn.containers()

spawn.basicNumbers()

spawn.createLabels()

spawn.createTitle()

spawn.createhelpbutton()

spawn.createbackbutton()

spawn.createhelptext()

spawn.createscore()

spawn.createholes()

spawn.createmoles()

spawn.createresetbutton()

spawn.createbtmbutton()

spawn.createhelptitle()

spawn.createdifficultybuttons()

spawn.createdifficultytitle()


}

var init = function(){
	createjs.Ticker.setFPS(60);
	stage = new createjs.Stage("demoCanvas");
	createjs.Ticker.addEventListener("tick", stage);
	gametype [0] = false;
	gametype [1] = true;
	gametype [2] = false;
	for (let l = 0; l < 4; l++)
	{
	gamemode[l] = false;
 }
	startGame();
	screens.uidetect()
setInterval(screens.uidetect, 1);
}
