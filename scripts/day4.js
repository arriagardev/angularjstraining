app.controller("day4Ctrl", function ($scope) {
  $scope.title = "Day 4";
  // Go up button
  var btn =document.getElementById('goup');
  // Hide for the first 1200px
  window.addEventListener('scroll',function(){
    'use strict';
    if ( scrollY > 800 )
    {
      btn.style.display ="block"
    }
    else
    {
      btn.style.display ="none"
    }
  });
  //  Add timeout to smoth the scroll
  btn.onclick=function(){
    'use strict';
  var count =0;
  var x = setInterval(function(){
    'use strict';
    window.scrollTo(0,scrollY-count);
    count++
    if ( scrollY ==0 )
    {
      clearInterval(x)
    }
  },10) 
  };
});