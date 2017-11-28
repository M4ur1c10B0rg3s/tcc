$(document).ready(function(){
    $("#nav-about").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").show();
            $(".pontos-turisticos").hide();
    });

    $("#nav-home").click(function(){
        $(".header").show();
         $(".text-center").show();
          $(".container").show();
           $(".about").hide();
            $(".pontos-turisticos").hide();
    });

    $("#dropdown-turismo").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").hide();
            $(".pontos-turisticos").show();
    });

    $("#pontosTuristicos").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").hide();
            $(".pontos-turisticos").show();
    });
});