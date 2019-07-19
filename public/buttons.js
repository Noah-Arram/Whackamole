var button = {
  labelclick:function()
  {
    if (gametype [2] === true)
    {
    		helptype[labelindex - 1] = true;
    		gametype [2] = false;
        helpcontent[labelindex - 1].visible = true;
        for (let i = 0; i < 4; i++)
        {
          labels[i].visible = false;
        }
    	}
    	else
    	{
    		gamemode[labelindex - 1] = true;
    		gametype [0] = true;
    		gametype [1] = false;
    		gametype [2] = false;
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
          help[0].visible = false;
          }
    	}
  }
},
  backclick:function()
  {
    if (gametype [2] === true)
    {
    gametype [2] = false;
    gametype [1] = true;
    titles[0].visible = true;
    help[0].visible = true;
    backs[0].visible = false;
    }
  else
  {
    gametype [2] = true;
    for (let l = 0; l < 4; l++)
    {
      labels[l].visible = true;
    helptexts[0].visible = false;
    helptype[l] = false;
    }
  }

},
btmclick:function()
{
  gametype [1] = true;
  gametype [0] = false;
  for (let i = 0; i < 4; i++)
  {
    for (let l = 0; l < 9; i++)
    {
      holes[l].visible = false;
      moles[l].visible = false;
      scoretext[0].visible = false;
      resets[0].visible = false;
      backtms[0].visible = false;
        gamemode[i] = false;
        score = 0;
        helpers.updateScore()
        setTimeout(function(){labels[i].visible = true;
        titles[0].visible = true;
        help[0].visible = true;}, 250);

    }
  }
},
helpclick:function()
{
  gametype [2] = true;
  gametype [1] = false;
  for (let i = 0; i < 4; i++)
  {
  labels[i].visible = true;
  helptexts[0].visible = true;
}
}
}
