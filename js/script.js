$(document).ready(function(){
    $("#nav-about").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").show();
            $(".pontos-turisticos").hide();
             $(".restaurantes-bares").hide();
    });

    $("#nav-home").click(function(){
        $(".header").show();
         $(".text-center").show();
          $(".container").show();
           $(".about").hide();
            $(".pontos-turisticos").hide();
             $(".restaurantes-bares").hide();
    });

    $("#dropdown-turismo").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").hide();
            $(".pontos-turisticos").show();
             $(".restaurantes-bares").hide();
    });

    $("#pontosTuristicos").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").hide();
            $(".pontos-turisticos").show();
             $(".restaurantes-bares").hide();
    });

    $("#dropdown-restaurantes").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").hide();
            $(".pontos-turisticos").hide();
             $(".restaurantes-bares").show();
    });

    $("#card-restaurantes").click(function(){
        $(".header").hide();
         $(".text-center").hide();
          $(".container").hide();
           $(".about").hide();
            $(".pontos-turisticos").hide();
             $(".restaurantes-bares").show();
    });
});