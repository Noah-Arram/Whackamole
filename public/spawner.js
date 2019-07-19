var spawn = {
  basicNumbers:function()
  {
    for (let i = 1; i < 10; i++)
  	{
  	number = new createjs.Text(i, "80px comic sans MS", "#00000");
  	stage.addChild(number);
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
  if (gametype [2] === true)
  {
  		helptype[event.target._index2 - 1] = true;
  		gametype [2] = false;
  	}
  	else
  	{
  		gamemode[event.target._index2 - 1] = true;
  		gametype [0] = true;
  		gametype [1] = false;
  		gametype [2] = false;
  	}
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
  	gametype [2] = true;
  	gametype [1] = false;
  })
},

}
