$(document).ready(function(){
    $("#nav-about").click(function(){
        $(".carousel").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").show();
    });

    $("#nav-home").click(function(){
        $(".carousel").show();
         $(".text-center").show();
          $(".container").show();
           $(".about").hide();
    });
});