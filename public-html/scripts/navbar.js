function getDisplay(element){
    return element.currentStyle ? element.currentStyle.display :
                                    getComputedStyle(element, null).display;
}

$(document).ready(function(){
    console.log("navbar script running");
    var element = document.getElementById("nav-bar");
    $("#header").on("click", "#bars",(function(){
        if(getDisplay(element) === "none"){
            element.style.display = "flex";
        }
        else{
            element.style.display = "none";
        }
    }));
    $(window).resize(function() {
        if($(window).width() <= 543){
            element.style.display = "none";
        }
        else{
            element.style.display = "flex";
        }
    })
});