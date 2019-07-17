var stage;
var odd;
var even;
var square;
var prime;
var random;
var holes = [];
var moles = [];
var score;
var oldmole;
var randomlist = [0,1,2,3,4,5,6,7,8];
var basicnumbers = [];
var scoretext = [];
var positions= [[[100,100], [450,100], [800, 100]],[[100,300], [450,300], [800, 300]],[[100,500], [450,500], [800, 500]]]

function updaterandom()
{
	random = Math.floor(Math.random() * 9)
}

function updatescore()
{
	scoretext[0].text = "Score: " + score;

}

function makebasic()
{
	for (let i = 1; i < 10; i++)
	{
	number = new createjs.Text(i, "80px comic sans MS", "#00000");
	stage.addChild(number);
	basicnumbers.push(number);
  }
}

var positionNumbers = function(){
	randomlist =  _.shuffle(randomlist);

	for (let i = 0; i < 9; i++)
	{
   basicnumbers[i].x = holes[randomlist[i]].x + 150;
		basicnumbers[i].y = holes[randomlist[i]].y + 10;
	}
};

var updateGame = function(){
positionNumbers();
	updaterandom()

      if (moles[random].visible === false || oldmole !== random)
			{
				moles[random].visible = true;
				oldmole = random;
			}
			else (moles[random].visible === true || oldmole === random)
			{
				updaterandom()
			}

				for(let i = 0; i < 9; i++){
					moles[i].visible = (random === i);

				}
}

var startGame = function(){

score = 0;

odd = true;

	var text = new createjs.Text("Score: 0", "40px comic sans MS", "#00000");
	 text.x = 50;
	 text.y = 700;
	 text.textBaseline = "alphabetic";
	 stage.addChild(text);
scoretext.push(text);


var offsetx  = -7.5
var offsety = -80

for (let i = 0 ;i < 3 ;i++)
{
for (let j=0 ;j < 3; j++)
{
	var hole = new createjs.Shape();
	hole.graphics.beginFill("black").drawEllipse(0, 0, 125, 75);
	hole.x = positions[i][j][0];
	hole.y = positions[i][j][1];
	stage.addChild(hole);
	holes.push(hole);
}
}

for (let i = 0 ;i < 3 ;i++)
{
for (let j=0 ;j < 3; j++)
{
	var mole = new createjs.Bitmap("mole.png");
	stage.addChild(mole);
	mole.x = positions[i][j][0] + offsetx;
	mole.y = positions[i][j][1] + offsety;


	mole._index = moles.length;


	moles.push(mole);
	mole.visible = false;
	mole.addEventListener("click", function(event) {

       // find out which number it is.

		    score = score + 1;
		    updatescore();
		  event.target.visible = false;
		//	alert(event.target._data.i);
			console.log("randomlist", randomlist,  event.target._index);
		})
	  }
  }

var reset = new createjs.Bitmap("reset.png");
stage.addChild(reset);
reset.x = 800;
reset.y = 630;
reset.addEventListener("click", function(event) {
	score = 0;
	updatescore()
})

if (odd === true || even === true)
{
	makebasic();
}

}

var init = function(){
	createjs.Ticker.setFPS(60);
	stage = new createjs.Stage("demoCanvas");
	createjs.Ticker.addEventListener("tick", stage);
	startGame();
	//add click listeners
	updateGame();
	setInterval(updateGame, 1750000)
}
