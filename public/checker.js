//check which gamemode is being played
//create scoring function for each gamemode
//run correct scoring function based on each gamemode
var checker = {
  gameChecker:function()
  {
    if (gamemode[0] === true)
    {
     checker.oddscorer()
    }
    if (gamemode[1] === true)
    {
     checker.evenscorer()
    }
    if (gamemode[2] === true)
    {
     checker.squarescorer()
    }
    if (gamemode[3] === true)
    {
     checker.primescorer()
    }
  },



  oddscorer:function()
  {
     console.log(moleindex);

    if ((randomlist[moleindex] + 1) % 2 === 1)
        {
         checker.scorer()
        }
        else
        {
            checker.lose()
        }
      },
  evenscorer:function()
  {
    if ((randomlist[moleindex] + 1) % 2 === 0)
        {
          checker.scorer()
        }
        else {

            checker.lose()

        }
  },
  squarescorer:function()
  {
    if ((randomlist[moleindex] + 1) % 2 === 1)
    {
      checker.scorer()
    }
    else {

        checker.lose()

     }
  },
  primescorer:function()
  {
    if (gamemode[3] === true)
      {
      if(randomlist[moleindex] + 1 === 2||randomlist[moleindex] + 1 === 3||randomlist[moleindex] + 1 === 5||randomlist[moleindex] + 1 === 7)
            {
              checker.scorer()
            }
            else {
                checker.lose()
  }
}
},
scorer:function()
{
  score = score + 1;
  helpers.updateScore();
event.target.visible = false;
},
lose:function()
{
  if (score !== 0)
  {
  score = score - 1;
  helpers.updateScore();
   }
event.target.visible = false;
}
              }
