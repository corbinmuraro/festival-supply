$(function() {

});

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


$('#searchbutton').click(function(e) {
    e.preventDefault(); 
    $('#searchbutton').toggleClass('dark-searchbutton');
    $('.searchfield').toggleClass('opened-searchfield');
    $('.searchfield').toggleClass('widened-searchfield');
    setTimeout(function() {
        $('.searchfield').focus();
    },200);

});