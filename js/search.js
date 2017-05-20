---
---

var open = false; // tracks searchbar status

// Form submit --> search
$('#searchform').submit(function(e) {
	e.preventDefault();
	search();
});

// Search button click
// If open and text --> search
// If open without text --> close
// If closed --> open
$('#searchbutton').click(function(e) {
	e.preventDefault();
	if (open) {
		if ($(".searchfield").val() !== "") {
			search();
		}
		else {
			closeSearchBar();
		}
	}
	else {
		openSearchBar();
	}
});

$('.searchfield').on('touchstart', function () {
    $(this).select();
});

// If ESC press and open --> close
// If TAB and closed --> open
$(document).keyup(function(e) {
    if (e.keyCode == 27) { 
     	e.preventDefault();
        if (open) {
            closeSearchBar();
        }
    }
    else if (e.keyCode == 9) {
    	e.preventDefault();
		if (open) {
			closeSearchBar();
		}
		else {
			openSearchBar();
		}
    }
});

// On deselect --> close
$(".content").click(function(e) {	
	// e.preventDefault();
	closeSearchBar();
});

// Show all results when "Show all" clicked
$('.reset').click(function() {
	displaySearchResults("", data, data);
});


function openSearchBar() {
	$('#searchbutton').addClass('dark-searchbutton');
    $('.searchfield').addClass('opened-searchfield');
    $('.searchfield').addClass('widened-searchfield');
    setTimeout(function() {
        $('.searchfield').focus();
    },200);
    open = true;
}

function closeSearchBar() {
    $('#searchbutton').removeClass('dark-searchbutton');
    $('.searchfield').removeClass('opened-searchfield');
    $('.searchfield').removeClass('widened-searchfield');
    open = false;	
}



/* SEARCH FUNCTIONALITY */

// Grab festival JSON data from jekyll
var data = {{site.data.festivals | jsonify}};

// Build lunr with JSON data
var idx = lunr(function () {
	this.field('id');
	this.field('title', { boost: 3 });
	this.field('date');
	this.field('location');
	this.field('rockArtists', { boost: 3 });
	this.field('hhArtists', { boost: 3 });
	this.field('electronicArtists', { boost: 3 });
	this.field('otherArtists', { boost: 3 });

	// add festivals to lunr
	for (var key in data) {
		this.add({
			'id': key,
			'title': data[key].title,
			'date': data[key].date,
			'location': data[key].location,
			'rockArtists': data[key]['rock-artists'].join(' '),
			'hhArtists': data[key]['hh-artists'].join(' '),
			'electronicArtists': data[key]['electronic-artists'].join(' '),
			'otherArtists': data[key]['other-artists'].join(' ')
		});
	}
});


// Determines the query in searchfield
// Uses lunr to grab results object
// Calls displaySearchResults to update DOM
function search() {
	var query = $(".searchfield").val();
	if (query == "") {
		displaySearchResults("", data, data);
	}
	else {
		var results = idx.search(query);
		displaySearchResults(query, results, data);
		ga('send', 'event', 'Search', 'submit', query);
	}
}

// Clears content field
// Displays and updates results summary
// Replaces content field with search results
function displaySearchResults(query, results, data) {
	$('.content').empty();
	
	// Hides OR shows and sets results summary
	if (query == "") {
		$('.summary-wrapper').hide();
	}
	else {
		$('.summary-wrapper').show();
		$('#numresults').text(results.length);
		if (results.length == 1) {
			$('#results-plural').text('');
		}
		else {
			$('#results-plural').text('s');
		}
	}

	if (results.length) {
		for (var i = 0; i < results.length; i++) {
			if (query == "")
				item = data[i]; // empty query --> show all results
			else
				item = data[results[i].ref]; // show query results

			var rockList, hhList, electronicList, otherList;
			rockList = "";
			hhList = "";
			electronicList = "";
			otherList = "";

			item['rock-artists'].forEach(function(artist) {
				rockList += "<li>" + artist + "</li>";
			});
			item['hh-artists'].forEach(function(artist) {
				hhList += "<li>" + artist + "</li>";
			});
			item['electronic-artists'].forEach(function(artist) {
				electronicList += "<li>" + artist + "</li>";
			});
			item['other-artists'].forEach(function(artist) {
				otherList += "<li>" + artist + "</li>";
			});

			var image = '<div class="image"><img src="images/' + item.image.url + '" alt="' + item.title + '"></div>';
			var title = '<div class="title"><a href="' + item.url + '">' + item.title + '</a></div>';
			var date = '<div class="date">' + item.date + '</div>';
			var location = '<div class="location">' + item.location + '</div>';
			var artistGroup = '<div class="artists-container">';

			if (rockList !== "")
				artistGroup += '<div class="artists col1"><p class="heading">Rock</p><ul class="list rock-artists">' + rockList + '</ul></div>';
			if (hhList !== "")
				artistGroup += '<div class="artists col2"><p class="heading">Hip-Hop</p><ul class="list hh-artists">' + hhList + '</ul></div>';
			if (electronicList !== "")
				artistGroup += '<div class="artists col3"><p class="heading">Electronic</p><ul class="list electronic-artists">' + electronicList + '</ul></div>';
			if (otherList !== "")
				artistGroup += '<div class="artists col4"><p class="heading">Everything Else</p><ul class="list other-artists">' + otherList + '</ul></div>'
			artistGroup += '</div><div class="toggle">+ Show More</div>';
			artistGroup += '<a class="attribution" target="_blank" href="' + item.image.source + '">' + item.image.author + '</a>';

			var container = '<section>' + image + '<div class="card">' + title + date + location + artistGroup + '</div></section>';
			$('.content').append(container);
		}
	}

	// Use mark.js to add span.higlight around search terms
	$(".artists-container").mark(query, {
	    "element": "span",
	    "className": "highlight",
	    "accuracy": "exactly"
	});
}



