$(document).ready(function(){
    $(".modal").hide();
    console.log("Modal Script Running");
    //toggle menus
    $("body").on("click", "#disclaimer",(function(){
        $(".modal").show();
    }));
    $(".modal").on("click", "#cancelBtn",(function(){
        $(".modal").hide();
    }));
});