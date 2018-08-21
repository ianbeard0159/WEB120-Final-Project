function scroll_pic(id, start, multiplier){
    var pos = document.documentElement.scrollTop;
    var height = $("body").height();
    //Adjust the multiplier if the image is too short for the page
    var scroll = multiplier*(70*(pos/height) + start) + "%";
    id.style.backgroundPosition = ("80%" + scroll);
    console.log(scroll);
}

$(document).ready(function(){
    console.log("paralax script running");
    var id = document.getElementById("background");
    var start = 35;
    var multiplier = 1.2;
    // Initialize Scroll Positions
    scroll_pic(id, start, multiplier);

    window.onscroll = function() {
        scroll_pic(id, start, multiplier);
    };
});