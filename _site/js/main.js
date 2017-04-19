$(function() {

});

// expand section on Show More click
$('.toggle').click(function() {
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
            $('#searchbutton').toggleClass('dark-searchbutton');
            $('.searchfield').toggleClass('opened-searchfield');
            $('.searchfield').toggleClass('widened-searchfield');
            $('.searchfield').blur();
        }
    }
});