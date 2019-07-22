var list = [];
var utils = {
  getRandom:function(from, to)
  {
    for (let i = from; i < to; i++)
    {
      list.push(i);
    random = list[Math.floor(Math.random() * to)]
  }
},


  positionNumbers:function(){
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
 },
 updateScore:function()
 {
   scoretext[0].text = "Score: " + score;
 },
 }
