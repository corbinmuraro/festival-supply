---
---

// grab festival json data from jekyll
var data = {{site.data.festivals | jsonify}};
console.log(data);

// initialize lunr
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

$('#searchform').on('submit', function(e) {
  e.preventDefault();
  var query = $(".searchfield").val();
  console.log(query);

  var results = idx.search(query); // Get lunr to perform a search
	displaySearchResults(results, data); // We'll write this in the next section
});

function displaySearchResults(results, store) {
	console.log(results);
	if (results.length) { // Are there any results?
		$('.content').empty(); // clear out current results

		for (var i = 0; i < results.length; i++) {  // Iterate over the results
			var item = store[results[i].ref];
			console.log(item['rock-artists']);
			console.log(item['hh-artists']);
			console.log(item['electronic-artists']);
			console.log(item['other-artists']);


			var rockList, hhList, electronicList, otherList;
			rockList = "<li></li>";
			hhList = "<li></li>";
			electronicList = "<li></li>";
			otherList = "<li></li>";

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

			var container = '<section></section>'
			var title = '<div class="title">' + item.title + '</div>';
			var date = '<div class="date">' + item.date + '</div>';
			var location = '<div class="location">' + item.location + '</div>';
			var artistGroup = '<div class="artists-container"><div class="artists col1"><p class="heading">Rock</p><ul class="list rock-artists">'
			+ rockList + '</ul></div><div class="artists col2"><p class="heading">Hip-Hop</p><ul class="list hh-artists">'
			+ hhList + '</ul></div><div class="artists col3"><p class="heading">Electronic</p><ul class="list electronic-artists">'
			+ electronicList + '</ul></div><div class="artists col4"><p class="heading">Everything Else</p><ul class="list other-artists">' 
			+ otherList + '</ul></div></div><div class="toggle">+ Show more</div>';

			if (i != results.length-1) {
				var container = '<section>' + title + date + location + artistGroup + '</section><hr>';
				$('.content').append(container);
			}
			else {
				var container = '<section>' + title + date + location + artistGroup + '</section>';
				$('.content').append(container);
			}
		}
	}
}


