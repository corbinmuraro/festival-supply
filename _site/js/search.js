// grab festival json data from jekyll
var data = [{"title":"Rolling Loud","date":"May 5–7","location":"Miami, FL, USA","rock-artists":[],"hh-artists":["Kendrick Lamar","A$AP Rocky","Mac Miller","Future","Run the Jewels","Travis Scott","Young Thug","Migos","Joey Bada$$","Chief Keef","Kevin Gates","Action Bronson","Curren$y","Post Malone","Lil Uzi Vert","Lil Yachty","Flatbush Zombies","Blackbear","Kodak Black","21 Savage","Denzel Curry","The Underachievers","Amine","Mick Jenkins","Rob $tone","Playboi Carti","Jazz Cartier","Azizi Gibson","Robb Bank$","Nebu Kiniza","Rich Chigga","XXXTentacion","Chaz French","Trill Sammy","Kembe X","Jay IDK","Topaz Jones","wifisfuneral","SAINt JHN","Larry June","Zoey Dollaz","Bobo Swae","SesHolloWaterBoyz","Eearz","Malcolm Anthony","Polly A","A. Chal","indigochildrick","Impxct","Uma Jolie"],"electronic-artists":[],"other-artists":[]},{"title":"Hangout Music Fest","date":"May 19–21","location":"Gulf Shores, AL, USA","rock-artists":["Weezer","Band of Horses","Young the Giant","Franz Ferdinand","Local Natives","Warpaint","The Strumbellas","Andrew McMahon in the Wilderness","Mutemath","Bishop Briggs","Rainbow Kitten Surprise","Strand of Oaks","Mondo Cozmo","Le Youth","888","The Heydaze","SUSTO","White Reaper","The Worn Flints"],"hh-artists":["Chance the Rapper","Migos","Tory Lanez","A$AP Ferg","Lil Yachty","DJ Jazzy Jeff","Russ","Towkio","Pardison Fontaine","Tkay Maidza"],"electronic-artists":["Major Lazer","DJ Snake","Sigur Ros","Marshmello","Dillon Francis","Charli XCX","Cash Cash","Louis the Child","NGHTMRE","TCHAMI","Snakehips","Cherub","Gryffin","Matoma","Cheat Codes","Kungs","Bob Moses","ARIZONA","Nora En Pure","Shaun Frank","Brasstracks","Elephante","Jillionaire","Kap Slap","CVBZ","MISSIO","Foreign Air","BASSH","DJ Hashim"],"other-artists":["Mumford & Sons","Twenty One Pilots","Frank Ocean","MGMT","The Head and the Heart","Lukas Graham","Mac DeMarco","Rufus du Sol","Shaggy","MAGIC!","LANY","PVRIS","Lewis Del Mar","Hurray for the Riff Raff","Joseph","LP","Joshua James","Cobi","Barns Courtney","Coin","Fletcher","Frances","The Suffers","Lawrence","The New Respects","Jimmy Lumpkin & the Revival","NAWAS"]},{"title":"Sasquatch! Music Festival","date":"May 26–28","location":"George, WA, USA","rock-artists":["The Shins","Thee Oh Sees","Car Seat Headrest","Foxygen","Catfish and the Bottlemen","The Strumbellas","American Football","The Hotelier","Mondo Cozmo","White Lung","Rainbow Kitten Surprise","Arkells","July Talk","Klangstof","Los Colognes","Kyle Craft","Sloucher"],"hh-artists":["Chance the Rapper","Mac Miller","Aesop Rock","Big Freedia","Kaiydo","Boogie","Joey Purp","Porter Ray","DoNormaal"],"electronic-artists":["Bonobo","Kaytranada","Big Gigantic","Bomba Estereo","Bob Moses","Mount Kimbie","Jagwar Ma","Fakear","Manatee Commune","Kungs","IHF","Katie Kate"],"other-artists":["Frank Ocean","Twenty One Pilots","The Head and the Heart","MGMT","Phantogram","Rufus du Sol","Sleigh Bells","Bleachers","Kiiara","Charles Bradley and his Extraordinaires","Vulfpeck","Benjamin Clementine","Chicago Batman","Moses Sumney","The Radio Dept.","Cigarettes After Sex","SALES","Corey Harper","Flint Eastwood","Reuben and the Dark","Hoops","Courtney Marie Andrews","Gazebos","Saint Mesa","SISTERS","Sasheer Zamata","Fred Armisen","Beth Stelling","Sal Vulcano","Nate Bargatze","Sam Morril","Yogi Paliwal","Alice Wetterlund","Emmett Montgomery"]},{"title":"Governors Ball Music Festival","date":"June 2–4","location":"New York City, NY, USA","rock-artists":["Tool","Cage the Elephant","Royal Blood","Franz Ferdinand","Warpaint","Parquet Courts","Local Natives","The Strumbellas","Car Seat Headrest","The Orwells","Lo Moon","Mondo Cozmo","Welles","Ron Gallo","VANT"],"hh-artists":["Chance the Rapper","Childish Gambino","Wu-Tang Clan","Wiz Khalifa","Logic","Schoolboy Q","Danny Brown","Rae Sremmund","A$AP Ferg","Skepta","YG","Stormzy","SAINt JHN","Kaiydo","Tkay Maidza"],"electronic-artists":["Phoenix","Flume","Beach House","Mark Ronson Vs. Kevin Parker","Marshmello","Air","The Avalanches","Gryffin","Charli XCX","Zane Lowe","Eden","MUNA","The Range","ARIZONA","Jenaux"],"other-artists":["Lorde","Phantogram","Bleachers","The Head and the Heart","Mac DeMarco","Charles Bradley and his Extraordinaires","Banks","Tove Lo","Majid Jordan","Kehlani","Rufus du Sol","Michael Kiwanuka","Saint Motel","Francis & the Lights","Judah & the Lion","Roosevelt","Michael Blume","Dua Lipa","Barns Courtney","Blossoms","Jessie Reyez","Jack Martini"]},{"title":"Bonnaroo","date":"June 8–11","location":"Manchester, TN, USA","rock-artists":["U2","Red Hot Chili Peppers","Cage the Elephant","Portugal. the Man","Cold War Kids","Kaleo","Royal Blood","The Strumbellas","Car Seat Headrest","The Front Bottoms","Bad Suns","Rainbow Kitten Surprise","Kevin Morby","Deap Vally","Hippo Campus","Ten Fé","The Orwells","Mondo Cozmo","July Talk","Lucy Dacus","Klangstof","The Lemon Twigs","Wilderado","Twiddle","White Reaper","Lukas Nelson & Promise of The Real","Welles"],"hh-artists":["Chance the Rapper","Travis Scott","Tory Lanez","Russ","D.R.A.M.","Flatbush Zombies","Amine","Noname","Kaiydo","Kevin Abstract","Innanet James"],"electronic-artists":["Major Lazer","Flume","The xx","Marshmello","Big Gigantic","Future Islands","Crystal Castles","Yellow Claw","Louis the Child","Borgore","NGHTMRE","Getter","Snails","Illenium","Claude VonStroke","G Jones","Eden","Ookay","Herobust","Goldfish","San Holo","REZZ","Haywyre","Vanic","Unlike Pluto","Nightly","Ganja White Night"],"other-artists":["The Weeknd","Lorde","The Head and the Heart","Glass Animals","Tove Lo","Umphrey's McGee","Tegan and Sara","Milky Chance","Jon Bellion","Michael Kiwanuka","Gallant","Dua Lipa","James Vincent McMorrow","Joseph","Francis & the Lights","Margo Price","BadBadNotGood","Preservation Hall Jazz Band","Greensky Bluegrass","Cam","Coin","Mandolin Orange","Leon","Albin Lee Meldau","Angelique Kidjo","Luke Combs","Stick Figure","Goody Grace","Khruangbin","Turkuaz","Twin Limb","Big Jesus","River Whyless","Alexandra Savior","Aaron Lee Tasjan"]},{"title":"Firefly Music Festival","date":"June 15-18","location":"Dover, DE, USA","rock-artists":["Muse","Bob Dylan","Weezer","The Shins","Thirty Seconds to Mars","Franz Ferdinand","AFI","Ok Go","Kaleo","O.A.R.","The Strumbellas","Bishop Briggs","Hamilton Leithauser","Rainbow Kitten Surprise","Sunflower Bean","888","Dreamers","Andy Frasco & The U.N.","Mondo Cozmo","Wilderado","Klangstof"],"hh-artists":["Chance the Rapper","Busta Rhymes","Lil Dicky","T-Pain","DJ Jazzy Jeff","Wale","NF","Waka Flocka Flame","Sir the Baptist","Kaiydo","Pardison Fontaine","Taylor Bennett","Alex Wiley"],"electronic-artists":["Flume","Dillon Francis","Miike Snow","Galantis","The Naked and Famous","Benny Benassi","Snakehips","Bob Moses","Cashmere Cat","Matoma","Illenium","Gryffin","Francis & the Lights","Slushii","Big Wild","Eden","The White Panda","Alan Walker","MUNA","Sam Feldt","Anna Lunoe","Jonas Blue","MISSIO","ARIZONA","Crywolf","Elohim","Steve James","SHAED","Win & Woo","Young Bombs","ayokay","Foreign Air","ROZES","SAINT WKND","CVBZ"],"other-artists":["The Weeknd","Twenty One Pilots","Kesha","Glass Animals","Phantogram","Capital Cities","Banks","Bleachers","Misterwives","Nahko and Medicine for the People","Daya","Stick Figure","Sir Sly","Lewis Del Mar","Judah & the Lion","K.Flay","Maggie Rogers","Jacob Banks","Sofi Tukker","Magic Giant","Barns Courtney","Meg Mac","Quinn XCII","James TW","Handsome Ghost","Kevin Garrett","Secret Weapons","Goody Grace","NAWAS","Dead Man Fall"]},{"title":"FYF Fest","date":"July 21–23","location":"Los Angeles, CA, USA","rock-artists":["Nine Inch Nails","Iggy Pop","Slowdive","King Krule","Blonde Redhead","Grandaddy","Ty Segall","The Faint","Beach Fossils","Temples","Thee Oh Sees","Jonathan Richman","Whitney","Hundred Waters","Mitski","Royal Headache","Cherry Glazerr","Big Thief"],"hh-artists":["Missy Elliott","A Tribe Called Quest","Run the Jewels","Sleep","Noname","Joey Purp","6lack","Kamaiyah","Princess Nokia","Nadia Rose","Kirk Knight"],"electronic-artists":["Flying Lotus","Nicolas Jaar","Little Dragon","Mura Masa","The Black Madonna","Motor City Drum Ensemble","John Talabot","Arca","DJ Harvey","TR/ST","Tiga","Talaboman","Omar-S","Daniel Avery","SURVIVE","Horse Meat Disco","Fatima Yamaha","Helena Hauff","Avalon Emerson","Paranoid London","Young Marco"],"other-artists":["Bjork","Frank Ocean","Erykah Badu","Solange","Anderson .Paak","MGMT","Hannibal Buress","Angel Olsen","Kehlani","Majid Jordan","Thundercat","The Drums","Seun Kuti & Egypt 80","Cap'n Jazz","BadBadNotGood","Perfume Genius","Moses Sumney","Andy Shauf","Julia Jacklin"]},{"title":"Lollapalooza","date":"August 3–6","location":"Chicago, IL, USA","rock-artists":["The Killers","Muse","Arcade Fire","Blink-182","Cage the Elephant","The Shins","Ryan Adams","Liam Gallagher","Spoon","Grouplove","Kaleo","Live","Whitney","Royal Blood","Andrew McMahon in the Wilderness","Car Seat Headrest","The Pretty Reckless","Warpaint","Highly Suspect","Cloud Nothings","CRX","Temples","Bishop Briggs","The Districts","San Fermin","Pup","Hippo Campus","Kevin Devine","The Lemon Twigs","The Shelters","VANT","Middle Kids","The Hunna","Mondo Cozmo","Blaenavon","Lo Moon","Declan McKenna","Ron Gallo","Atlas Genius","The London Souls","888","Slothrust","Colony House","Jesse Malin","Lady Pills"],"hh-artists":["Chance the Rapper","Run the Jewels","Wiz Khalifa","Big Sean","Rae Sremmund","Migos","Lil Uzi Vert","Russ","21 Savage","Lil Yachty","Noname","Joey Bada$$","Machine Gun Kelly","Jidenna","NF","$uicideboy$","Amine","6lack","Michael Christmas","SAINt JHN","MadeinTYO","Boogie","Duckwrth","Kweku Collins"],"electronic-artists":["The xx","DJ Snake","Justice","Kaskade","Porter Robinson","Zeds Dead","Gramatik","Crystal Castles","Little Dragon","DVBBS","3LAU","Borgore","Alison Wonderland","Kaytranada","Charli XCX","SLANDER","Getter","NGHTMRE","Baauer","Slushii","A-Trak","Tritonal","Sampha","Jai Wolf","Ephwurd","Mura Masa","Gryffin","Joyryde","G Jones","Ookay","Honne","Cheat Codes","Paper Diamond","San Holo","Dirty Audio","Unlike Pluto","Whetan","Young Bombs","MISSIO","ARIZONA","Moksi","Wingtip","Wax Motif","Pham","Elohim"],"other-artists":["Lorde","Alt-J","The Head and the Heart","Foster the People","Glass Animals","Phantogram","Tove Lo","Milky Chance","Vance Joy","Tegan and Sara","Jon Bellion","Mac DeMarco","Banks","George Ezra","Sylvan Esso","Capital Cities","London Grammar","Rag’n’Bone Man","Majid Jordan","Zara Larsson","The Drums","Alvvays","Maggie Rogers","Joseph","Moose Blood","The Japanese House","Leon","Skott","Blossoms","Jacob Banks","Barns Courtney","Oliver Tree","Jain","Grace Mitchell","The O'My's","Flint Eastwood","The Frights","Bibi Bourelly","Sofi Tukker","Xavier Omar","Cobi","Gibbz","Michael Blume","Stanaj","The Walters","Allan Rayman","FRENSHIP","Spencer Ludwig","FLOR","Harriet Brown","Brayton Bowman","Goody Grace","MAX","Tucker Beathard","Tim Kubart and the Space Cadets","Lucky Diaz","Q Brothers","Sleepy Man","JoJo and the Pinecones","Lard Dog & the Band of Shy","Little Miss Ann","School of Rock All Stars"]},{"title":"Outside Lands","date":"August 11–13","location":"San Francisco, CA, USA","rock-artists":["Metallica","The Who","Queens Of The Stone Age","Young the Giant","Royal Blood","Dawes","Warpaint","Real Estate","Temples","Hamilton Leithauser","Foxygen","Electric Guest","Hundred Waters","San Fermin","Mon Laferte","The Lemon Twigs","Mondo Cozmo"],"hh-artists":["A Tribe Called Quest","Schoolboy Q","Action Bronson","Dr. Octagon","Noname","Kamaiyah","Sam Dew"],"electronic-artists":["Gorillaz","Above & Beyond","Empire Of The Sun","Little Dragon","Kaytranada","Louis The Child","Bomba Estereo","RAC","How to Dress Well","Sohn","Goldroom","SURVIVE","Porches","MUNA","Oliver Tree"],"other-artists":["Lorde","Alt-J","Fleet Foxes","The Avett Brothers","Belle and Sebastian","Solange","Future Islands","Rebelution","Vance Joy","Bleachers","Tove Lo","Sleigh Bells","Shovels & Rope","Thundercat","Rag’n’Bone Man","James Vincent McMorrow","K.Flay","Maggie Rogers","Sofi Tukker","Khruangbin","Kali Uchis","Joseph","The Japanese House","Lee Fields & The Expressions","Grace Mitchell","Jacob Banks","John Moreland","FRENSHIP","Lawrence","The She’s"]}];
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

