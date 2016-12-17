$(document).ready(function() {
    setInterval(renderGame, 50);
    $("#container").mousemove(function(event){
        console.log(event.pageX);
        $("#boat").css({left:event.pageX});   
    });
    $(".trash").
});

function renderGame() {  
    //gets the trash
     var can = $("#can");
     var offset = can.offset();
     //sets position
     $("#can").offset({ top: offset.top, left: offset.left});
}

// https://api.jquery.com/mousemove/

