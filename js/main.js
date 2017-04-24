$(function() {

});

// expand section on Show More click
$("section").on("click", ".toggle", function(){
    var toggle = $(this);
    var section = toggle.parent();

    if (toggle.hasClass('expanded')) {
        section.find('ul li:nth-child(n+9)').css("display", "none");
        toggle.text("+ Show more");
        toggle.removeClass('expanded');
    }
    else {
        section.find('li').css("display", "list-item");
        toggle.text("– Show less");
        toggle.addClass('expanded');
    }
});

// toggle searchfield on SEARCH icon click
$('#searchbutton').click(function(e) {
    e.preventDefault(); 
    $('#searchbutton').toggleClass('dark-searchbutton');
    $('.searchfield').toggleClass('opened-searchfield');
    $('.searchfield').toggleClass('widened-searchfield');
    setTimeout(function() {
        $('.searchfield').focus();
    },200);
});

// close searchfield on ESC keyup
$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
        if ($('.searchfield').is(":focus")) {
            $('#searchbutton').removeClass('dark-searchbutton');
            $('.searchfield').removeClass('opened-searchfield');
            $('.searchfield').removeClass('widened-searchfield');
            $('.searchfield').blur();
        }
    }
});

// close searchfield on deselect
$(".searchfield").blur(function() {
    $('#searchbutton').removeClass('dark-searchbutton');
    $('.searchfield').removeClass('opened-searchfield');
    $('.searchfield').removeClass('widened-searchfield');
});