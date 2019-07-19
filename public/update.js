var update = {
  update:function()
  {

    if (gametype [0] === false)
    {
  if (gametype [0] === true)
  {
    helpers.positionNumbers();
      helpers.getRandom(1,9);

      for(let i = 0; i < 9; i++){
        moles[i].visible = (random === i);
      }


      helpers.getRandom(1,9);
      helpers.getRandom(1,9);
      helpers.getRandom(1,9);
    }
  }




  speed = 1500 - (score * 25);
  if (speed < 750)
  {
    speed = 750;
  }
  //if score goes up by 5 speed up by 0.25sec
  setTimeout(update.update, speed);
  }
  }
