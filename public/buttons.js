var button = {
  labelclick:function()
  {
    if (gametype === "help menu")
    {
        ui_manager.helptextui()
        gametype = "helptext displaying";
    	}
    	else
    	{
    		gamemode[labelindex - 1] = true;
    	gametype = "difficulty select";
        ui_manager.difficultyselectui()
  }
},
  backclick:function()
  {
    if (gametype === "help menu")
    {
       gametype = "menu";
      ui_manager.gametype1ui()
    }
   if (gametype === "helptext displaying")
  {
    gametype = "help menu";
    for (let l = 0; l < 4; l++)
    {
     ui_manager.gametype2ui()
    helptype[l] = false;
    }
  }
  if (gametype === "difficulty select")
  {
    gametype = "menu";
    ui_manager.gametype1ui()
  }

},
btmclick:function()
{
gametype = "menu";
  for (let i = 0; i < 4; i++)
  {
    for (let l = 0; l < 9; l++)
    {
      ui_manager.gametype1ui()
        gamemode[i] = false;
        score = 0;
        utils.updateScore()
        clearTimeout(updatetimeout);


    }
  }
},
helpclick:function()
{
gametype = "help menu";
ui_manager. gametype2ui()
},
difficultyclick:function()
{
  gametype = "gamestart";
  ui_manager.gametype0ui()
  update.update()
  speedchange = difficultyindex * 10;
}
}
