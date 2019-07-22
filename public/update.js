var update = {
  update:function()
  {

  if (gametype === "gamestart")
  {
    utils.positionNumbers();
      utils.getRandom(1,9);

      for(let i = 0; i < 9; i++){
        moles[i].visible = (random === i);
      }



    }



  speed = 1500 - (score * speedchange);
  if (speed < 750)
  {
    speed = 750;
  }
  //if score goes up by 5 speed up by 0.25sec
  updatetimeout = setTimeout(update.update, speed);

  }
  }
