$().ready(function(){
  var color = "white";
  $(".col").css("opacity","0");
  $(".hint").text("我是提示");
  
  $(".col").click(function(){
    $(this).css("opacity","1");
    $(this).addClass(color);
    
  });
  
  $("#restart").click(function(){
    $(".col").removeClass("white");
  });
});