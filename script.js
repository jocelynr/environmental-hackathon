$(document).ready(function() {
    //initial position of each trash object
    setPosition($("#can").parent(), 100, 400);
    setPosition($("#glassbottle").parent(), 300, 60);
    setPosition($("#foamcup").parent(), 500, 70);
    setPosition($("#crumbledpaper").parent(), 700, 80);
    setPosition($("#lays").parent(), 900, 20);
    setPosition($("#oilbarrel").parent(), 1100, 20);
    setPosition($("#plastic").parent(), 1200, 20);
    setPosition($("#sprite").parent(), 1400, 20);
    //set position of the boat
    setPosition($("#boat"), 100, 550);

    
    setInterval(renderGame, 50);
    $("#container").mousemove(function(event){
        console.log(event.pageX);
        $("#boat").css({left: event.pageX});   
    });
    




function renderGame() {  
    //gets the trash
    //  //sets position
    // console.log($(".trash").offset().top);
    $(".trash").each(function () {
    var top = $(this).offset().top + 3; 
    if (top > 550){
        console.log("Game Over");
    }
    $(this).offset({ top: top});
    });
    
    //when boat reacieves trash
    var collectedTrash=  checkOverlap($("#boat")) * 2;
}

//sets inital position of trash object
function setPosition(trash, x,y) {
    trash.offset({ top: y, left: x});
     
}

function checkOverlap(){
    $(".trash").each(function () {
        // console.log(this)

    var x= overlap(
         $("#boat").offset().left,
         $("#boat").offset().top,
         $("#boat").width(),
         $("#boat").height(),
         $(this).offset().left,
         $(this).offset().top,
         $(this).width(),
         $(this).height()
         
     )
    if( x == true) {
        $(this).hide();
    }
     
     
     console.log(scorekeeper(x));
     console.log("I am X - " + x);
    });
    
}


var total = 4;
function scorekeeper(x){
    if(x == true){
       total= total - 1;
      if (total === 0) {
           window.location = "pop-up.html"
      }
    } 
    
    console.log("total = " + total)
}




function valueInRange(value,min, max) { 
   return (value >= min) && (value <= max);
}

function overlap(x1,y1,w1,h1,x2,y2,w2,h2) {
   xOverlap = valueInRange(x1, x2, x2 + w2) || valueInRange(x2, x1, x1 + w1);
   yOverlap = valueInRange(y1, y2, y2 + h2) || valueInRange(y2, y1, y1 + h1);
   return xOverlap && yOverlap;
}


});

