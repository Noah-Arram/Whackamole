var ui_manager = {
//gametype0 = gamestart, gametype1 = menu and gametype2 = help menu
   gametype0ui:function()
  {
        holescontainer.visible = true;
        scoretext[0].visible = true;
        resets[0].visible = true;
        backtms[0].visible = true;
        difficultycontainer.visible = false;
        backs[0].visible = false;
        titles[2].visible = false;
        molescontainer.visible = true;
        basicnumberscontainer.visible = true;
    },
    gametype1ui:function()
    {
            for (let d = 0; d < 3; d++)
            {
          holescontainer.visible = false;
          labelscontainer.visible = true;
          titles[d].visible = titles[d] === titles[0];
          scoretext[0].visible = false;
          resets[0].visible = false;
          backtms[0].visible = false;
          backs[0].visible = false;
          help[0].visible = true;
          molescontainer.visible = false;
          basicnumberscontainer.visible = false;
          difficultycontainer.visible = false;
      }
      },
      gametype2ui:function()
      {
            labelscontainer.visible = true;
            titles[0].visible = false;
            backs[0].visible = true;
            help[0].visible = false;
            helptexts[0].visible = false;
            titles[1].visible = true;
            backs[0].y = 650;
        },
        helptextui:function()
        {
           helptype[labelindex - 1] = true;
          helptexts[0].visible = true;
          helptexts[0].text = helpcontent [labelindex - 1];
          help[0].visible = false;
          labelscontainer.visible = false;
          titles[1].visible = false;
          backs[0].y = 675;
},
difficultyselectui:function()
{
    labelscontainer.visible = false;
    titles[0].visible = false;
    help[0].visible = false;
    difficultycontainer.visible = true;
    backs[0].visible = true;
    titles[2].visible = true;
}
}
