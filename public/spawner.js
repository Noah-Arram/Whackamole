var spawn = {
  basicNumbers:function()
  {
    for (let i = 1; i < 10; i++)
  	{
  	number = new createjs.Text(i, "80px comic sans MS", "#00000");
  	stage.addChild(number);
    number.visible = false;
  	basicnumbers.push(number);
  }
},
createLabels:function()
{
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
      labelindex = event.target._index2;
  button.labelclick()
  	})
  }
  }
},
createTitle:function()
{
  var title = new createjs.Bitmap("title.png");
  stage.addChild(title);
  title.x = 225;
  title.y = 100;
  titles.push(title);

},
createhelpbutton:function()
{
  var helpbutton = new createjs.Bitmap("help.png");
  stage.addChild(helpbutton);
  helpbutton.x = 465;
  helpbutton.y = 650;
  help.push(helpbutton);
  helpbutton.addEventListener("click", function(event)
  {
button.helpclick()
  })
},
createbackbutton:function()
{
  var back = new createjs.Bitmap("back.png");
  stage.addChild(back);
  back.x = 465;
  back.y = 650;
  back.visible = false;
  backs.push(back);
  back.addEventListener("click", function(event)
  {
  button.backclick()
  })

},
createscore:function()
{
  var text = new createjs.Text("Score: 0", "40px comic sans MS", "#00000");
   text.x = 50;
   text.y = 700;
   text.visible = false;
   text.textBaseline = "alphabetic";
   stage.addChild(text);
scoretext.push(text);

},
createhelptext:function()
{
  var helpname = new createjs.Text("", "40px comic sans MS", "#00000");
  helpname.x = 75;
  helpname.y = 100;
  helpname.visible = false;
  stage.addChild(helpname);
  helptexts.push(helpname);
},
createholes:function()
{
  for (let i = 0 ;i < 3 ;i++)
  {
  for (let j=0 ;j < 3; j++)
  {
  	var hole = new createjs.Shape();
  	hole.graphics.beginFill("black").drawEllipse(0, 0, 125, 75);
  	hole.x = positions[i][j][0];
  	hole.y = positions[i][j][1];
  	stage.addChild(hole);
    hole.visible = false
  	holes.push(hole);
  }
  }
},
createmoles:function()
{
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
      moles[event.target._index].visible = false;
      moleindex =  event.target._index;
     checker.gameChecker();
  		})
  	}


    }
},
createresetbutton:function()
{
  var reset = new createjs.Bitmap("reset.png");
  reset.x = 850;
  reset.y = 660;
  resets.push(reset);
  reset.visible = false;
  stage.addChild(reset);
  reset.addEventListener("click", function(event) {
  	score = 0;
  	helpers.updateScore()

  })

},
createbtmbutton:function()
{
  var backtm = new createjs.Bitmap("backtm.png");
  backtm.x = 450;
  backtm.y = 680;
  backtms.push(backtm);
  backtm.visible = false;
  stage.addChild(backtm);
  backtm.addEventListener("click", function(event) {
  button.btmclick()
  })
  }
}
