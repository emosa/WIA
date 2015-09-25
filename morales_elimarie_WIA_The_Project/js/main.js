// JavaScript Document



// This is for auto scroll to position//
    $("a").click(function(){
        $("html, body").animate({
            scrollTop: $( $.attr(this, "href") ).offset().top
            }, 900);
            return false;
    });
//End 



