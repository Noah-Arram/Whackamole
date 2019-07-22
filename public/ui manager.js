var ui_manager = {
//gametype0 = gamestart, gametype1 = menu and gametype2 = help menu
   gametype0ui:function()
  {
      for (let i = 0; i <9; i++)
      {
        for (let l = 0; l <4; l++)
        {
          for (let d = 0; d < 3; d++)
          {
        holes[i].visible = true;
        scoretext[0].visible = true;
        resets[0].visible = true;
        backtms[0].visible = true;
        difficulties[d].visible = false;
        backs[0].visible = false;
        titles[2].visible = false;
      }
    }
    }
    },
    gametype1ui:function()
    {
        for (let i = 0; i <9; i++)
        {
          for (let l = 0; l <4; l++)
          {
           for (let d = 0; d < 3; d++)
           {
          holes[i].visible = false;
          labels[l].visible = true;
          titles[0].visible = true;
          scoretext[0].visible = false;
          resets[0].visible = false;
          backtms[0].visible = false;
          backs[0].visible = false;
          help[0].visible = true;
          moles[i].visible = false;
          basicnumbers[i].visible = false;
          titles[1].visible = false;
          titles[2].visible = false;
          difficulties[d].visible = false;
        }
      }
      }
      },
      gametype2ui:function()
      {
          for (let i = 0; i <9; i++)
          {
            for (let l = 0; l <4; l++)
            {

            labels[l].visible = true;
            titles[0].visible = false;
            backs[0].visible = true;
            help[0].visible = false;
            helptexts[l].visible = false;
            titles[1].visible = true;
            backs[0].y = 650;
          }
        }
        },
        helptextui:function()
        {
          for (let i = 0; i < 4; i++)
         {
           helptype[labelindex - 1] = true;
          helptexts[labelindex - 1].visible = true;
          help[0].visible = false;
          labels[i].visible = false;
          titles[1].visible = false;
          backs[0].y = 675;
        }
},
difficultyselectui:function()
{
  for (let i = 0; i <3; i++)
  {
    for (let l = 0; l <4; l++)
    {
    labels[l].visible = false;
    titles[0].visible = false;
    help[0].visible = false;
    difficulties[i].visible = true;
    backs[0].visible = true;
    titles[2].visible = true;
  }
}
}
}
