var screens = {
  uidetect:function()
  {
    if (document.body.clientWidth < 1640)
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
