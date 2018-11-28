var songs = {
	1: {
    artist: "Kanye West",
    title: "All of the Lights",
    album: "My Beautiful Dark Twisted Fantasy",
    duration: "5:00"
  },
  2: {
    artist: "BROCKHAMPTON",
    title: "District",
    album: "iridescence",
    duration: "3:31"
  },
  3: {
    artist: "Travis Scott",
    title: "Skyfall",
    album: "Days Before Rodeo",
    duration: "3:31"
  },
  4: {
    artist: "Denzel Curry",
    title: "This Life",
    album: "Imperial",
    duration: "3:27"
  }
};

var playlists = {
	'Study':{
    songs: [1,2]
  },
	'Gym':{
		songs: [1,2,3,4]
	},
	'Relax':{
		songs: [3,4]
	}
}
$("html").on("click", ".fas.fa-play", function(){
	$(this).addClass("hidden");
	$(".fas.fa-pause").removeClass("hidden");
})
$("html").on("click", ".fas.fa-pause", function(){
	$(this).addClass("hidden");
	$(".fas.fa-play").removeClass("hidden");
})

$(function(){
var table = $("<table><table/>").attr("id","songList");
$("#songTable").append(table);
var title = "<tr><td>Title</td>";
var album = "<td>Artist</td>";
var album = "<td>Album</td>";
var duration = "<td>Duration</td></tr>";
$("#songList").append(title+artist+album+duration);
var key = 'Study'
var playlistSongs = playlists[key];
for (song in playlistSongs['songs']){
		var id = playlistSongs['songs'][song];
    var title="<tr><td>"+songs[id]["title"]+"</td>";
    var artist="<td>"+songs[id]["artist"]+"</td>";
    var album="<td>"+songs[id]["album"]+"</td>";
    var duration="<td>"+songs[id]["duration"]+"</td></tr>"
   $("#songList").append(title+artist+album+duration);
}
})
