var screens = {
  uidetect:function()
  {
var oldwidth = document.body.clientWidth;

    if (document.body.clientWidth < 1675)
    {
      leftbanner = document.getElementById("leftbanner")
      rightbanner = document.getElementById("rightbanner")
      leftbanner.style.display = "none";
      rightbanner.style.display = "none";
    }
    else {
      leftbanner.style.display = "block";
      rightbanner.style.display = "block";
    }

}
}
  
