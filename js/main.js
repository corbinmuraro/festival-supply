// expand section on Show More click
$("body").on("click", ".toggle", function(){
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

// ,
// {
//     "title": "Bumbershoot",
//     "url": "https://www.bumbershoot.com",
//     "date": "Sept 1–3",
//     "location": "Seattle, WA, USA",
//     "rock-artists": [
//     "hh-artists": [
//     "electronic-artists": ["Flume", "ODESZA", 
//     "other-artists": ["Lorde", 
// }