---
---

$(function() {
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
				'rockArtists': data[key]['rock-artists'],
				'hhArtists': data[key]['hh-artists'],
				'electronicArtists': data[key]['electronic-artists'],
				'otherArtists': data[key]['other-artists']
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
});



function displaySearchResults(results, store) {
	if (results.length) { // Are there any results?
		for (var i = 0; i < results.length; i++) {  // Iterate over the results
			var item = store[results[i].ref];
			console.log(item.title);
		}
	}
}