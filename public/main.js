var stage;
var gamemode = [0,1,2,3];
var random;
var holes = [];
var moles = [];
var gamestart;
var help = [];
var labels = [];
var helptexts = [];
var score;
var resets = [];
var menu;
var helptype = [0,1,2,3];
var hmenu;
var oldmole;
var randomlist = [0,1,2,3,4,5,6,7,8];
var basicnumbers = [];
var titles = [];
var backtms = [];
var backs = [];
var scoretext = [];
var positions= [[[100,100], [450,100], [800, 100]],[[100,300], [450,300], [800, 300]],[[100,500], [450,500], [800, 500]]]
var lpositions = [[[225,350],[575,350]],[[225,550],[575,550]]]

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

for (let l = 0; l < 9; l++)
{
	if (basicnumbers[l].visible === false)
	{
		basicnumbers[l].visible = true;
	}
}

	for (let i = 0; i < 9; i++)
	{
   basicnumbers[randomlist[i]].x = holes[i].x + 150;
   basicnumbers[randomlist[i]].y = holes[i].y + 10;
	}
}

var updateGame = function(){

	if (gamestart === false)
	{
			for(let i = 0; i < 9; i++)
			{
				holes[i].visible = false;
				moles[i].visible = false;
				resets[0].visible = false;
				basicnumbers[i].visible = false;
				scoretext[0].visible = false;
			}
		}


if (gamestart === true)
{
	positionNumbers();
		updaterandom()

		for(let i = 0; i < 9; i++){
			moles[i].visible = (random === i);
		}

	for (let i = 0; i < 9; i++)
	{
		for (let l = 0; l < 4; l++)
		{
		holes[i].visible = true;
		labels[l].visible = false;
		titles[0].visible = false;
		scoretext[0].visible = true;
		resets[0].visible = true;
		backtms[0].visible = true;
		backs[0].visible = false;
  	}
		menu = false;
		updaterandom()
		updaterandom()
		updaterandom()
	}
}


	if (menu === true)
	{
		titles[0].visible = true;
		for (let l = 0; l < 4; l++)
		{
		labels[l].visible = true;
	  }
		backs[0].visible = false;
		help[0].visible = true;
		for (let i = 0; i < 9; i++)
		{
		moles[i].visible = false;
	}
	backtms[0].visible = false;

	}
	else if (menu === false)
	{
		{
			for (let l = 0; l < 4; l++)
			{
			labels[l].visible = false;
		}
			titles[0].visible = false;
		}
		help[0].visible = false;
	}
	if (hmenu === true)
	{
		help[0].visible = false;
		titles[0].visible = false;
		for (let l = 0; l < 4; l++)
		{
		backs[0].visible = true;
	 labels[l].visible = true;
	 helptexts[l].visible = false;
 }
	}
	for (let i = 0; i < 4; i++)
	{
	if (helptype[i] === true)
	{
		helptexts[i].visible = (helptype[i] === true);
		for (let l = 0; l < 4; l++)
		{
		labels[l].visible = false;
	}
	}
}
}








var startGame = function(){
	updaterandom()

	makebasic()

score = 0;

for (let i = 0 ;i < 2 ;i++)
{
for (let j=0 ;j < 2; j++)
{
  var l=2*i + j;
	var label = new createjs.Bitmap("label" + l + ".png");
	stage.addChild(label);
	label.x = lpositions[i][j][0];
	label.y = lpositions[i][j][1];
	labels.push(label);
	label._index2 = labels.length;
	label.addEventListener("click", function(event) {
if (hmenu === true)
{
		helptype[event.target._index2 - 1] = true;
		hmenu = false;
	}
	else
	{
		gamemode[event.target._index2 - 1] = true;
		gamestart = true;
		menu = false;
		hmenu = false;
	}
	})
}
}

var title = new createjs.Bitmap("title.png");
stage.addChild(title);
title.x = 225;
title.y = 100;
titles.push(title);

var helpbutton = new createjs.Bitmap("help.png");
stage.addChild(helpbutton);
helpbutton.x = 465;
helpbutton.y = 650;
help.push(helpbutton);
helpbutton.addEventListener("click", function(event)
{
	hmenu = true;
	menu = false;
})

var back = new createjs.Bitmap("back.png");
stage.addChild(back);
back.x = 465;
back.y = 650;
backs.push(back);
back.addEventListener("click", function(event)
{
	if (hmenu === true)
	{
	hmenu = false;
	menu = true;
  }
else
{
	hmenu = true;
	for (let l = 0; l < 4; l++)
	{
		labels[l].visible = true;
	helptexts[l].visible = false;
	helptype[l] = false;
  }
}

})

var hodd = new createjs.Text("The odd numbers are all the numbers that exist \n that cannot be divided by 2. \n EG 3 is an odd number as if you have 3 blocks \n you can’t split them into 2 piles of the same amount \n each. 4 is not an odd number as if you have 4 blocks \n you could split them into 2 piles of the same amount \n each.", "40px comic sans MS", "#00000");
hodd.x = 100;
hodd.y = 100;
hodd.visible = false;
stage.addChild(hodd);
helptexts.push(hodd);

var heven = new createjs.Text("The even numbers are all the numbers that exist \n that can be divided by 2. \n EG 4 is an even number as if you have 4 blocks \n you can split them into 2 piles of the same amount \n each. 3 is not an even number as if you have 3 blocks \n you can’t split them into 2 piles of the same amount \n each.", "40px comic sans MS", "#00000");
heven.x = 100;
heven.y = 75;
heven.visible = false;
stage.addChild(heven);
helptexts.push(heven);

var hsquare = new createjs.Text("Square numbers are numbers that have been \n made by multiplying a whole number by itself. \n 2 EG 4 is a square number as it can be made \n by multiplying a whole number by itself, in this \n case that number is 2 (2x2=4). 5 is not a square \n number as it cannot be made by multiplying a whole \n number by itself.", "40px comic sans MS", "#00000");
hsquare.x = 100;
hsquare.y = 75;
hsquare.visible = false;
stage.addChild(hsquare);
helptexts.push(hsquare);

var hprime = new createjs.Text("Prime numbers are numbers can only be divided \n by themselves and by 1 to get an answer that is \n a whole number.  EG 7 is a prime number as the \n only numbers that it can be divided by to make \n a whole number is 7 (itself) and by 1. 8 is not a \n prime number as it can be divided by 1, 2 4 and \n eight to make a whole number. NOTE- 1 is not \n a prime number even though it seems to meet \n the requirements for a number to be a prime \n number.  This is because a prime number must be \n able to divide by 2 numbers, itself and 1. The \n number 1 can only divide by 1 number as itself and \n 1 are the same thing.", "40px comic sans MS", "#00000");
hprime.x = 100;
hprime.y = 75;
hprime.visible = false;
stage.addChild(hprime);
helptexts.push(hprime);

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
 if (gamemode[0] === true)
	{
  if ((randomlist[event.target._index] + 1) % 2 === 1)
	    {
		    score = score + 1;
		    updatescore();
		  event.target.visible = false;
      }
			else if ((randomlist[event.target._index] + 1) % 2 === 0)
			{
				if (score !== 0)
				{
				score = score - 1;
				updatescore();
			  }
				event.target.visible = false;
			}
	  	}
	  if (gamemode[1] === true)
		{
			if ((randomlist[event.target._index] + 1) % 2 === 0)
			    {
				    score = score + 1;
				    updatescore();
				  event.target.visible = false;
		      }
					else if ((randomlist[event.target._index] + 1) % 2 === 1)
					{
						if (score !== 0)
						{
						score = score - 1;
						updatescore();
					 }
						event.target.visible = false;
					}
			  	}
					else if (gamemode[2] === true)
						{
						if(randomlist[event.target._index] + 1 === 1||randomlist[event.target._index] + 1 === 4||randomlist[event.target._index] + 1 === 9)
									{
										score = score + 1;
										updatescore();
									event.target.visible = false;
									}
									else
									{
										if (score !== 0)
										{
										score = score - 1;
										updatescore();
									 }
										event.target.visible = false;
									}
						}
						else if (gamemode[3] === true)
							{
							if(randomlist[event.target._index] + 1 === 2||randomlist[event.target._index] + 1 === 3||randomlist[event.target._index] + 1 === 5||randomlist[event.target._index] + 1 === 7)
										{
											score = score + 1;
											updatescore();
										event.target.visible = false;
										}
										else
										{
											if (score !== 0)
											{
											score = score - 1;
											updatescore();
										 }
											event.target.visible = false;
										}
							}
		})
	}


  }

var reset = new createjs.Bitmap("reset.png");
reset.x = 850;
reset.y = 680;
resets.push(reset);
stage.addChild(reset);
reset.addEventListener("click", function(event) {
	score = 0;
	updatescore()

})

var backtm = new createjs.Bitmap("backtm.png");
backtm.x = 450;
backtm.y = 680;
backtms.push(backtm);
stage.addChild(backtm);
backtm.addEventListener("click", function(event) {
	menu = true;
	gamestart = false;
  for (let i = 0; i < 4; i++)
	{
		gamemode[i] = false;
	}
})
}




var init = function(){
	createjs.Ticker.setFPS(60);
	stage = new createjs.Stage("demoCanvas");
	createjs.Ticker.addEventListener("tick", stage);
	gamestart = false;
	menu = true;
	hmenu = false;
	for (let l = 0; l < 4; l++)
	{
	gamemode[l] = false;
 }
	startGame();
	for (let i = 0; i < 9; i++)
	{
	moles[i].visible = false;
}
	updateGame();
	setInterval(updateGame, 1500)
}
