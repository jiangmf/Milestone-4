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
		name: 'Study',
    songs: [1,2]
  },
	'Gym':{
		name: 'Gym',
		songs: [1,2,3,4]
	},
	'Relax':{
		name: 'Relax',
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
for (index in playlists){
	var playlistName = playlists[index].name;
	var name = $("<div><p>"+ playlistName +"</p></div>").attr("id", playlistName);
	$("#playlistList").append(name);
	console.log("#"+playlistName)
}
$("html").on('click', '#playlistList div', function(){id = $(this).attr('id');
showPlaylist(id);
$('#playlistList div').removeClass('active');
$(this).addClass('active');
});

})

function showPlaylist(playlist){
	console.log(playlist);
	var key = playlist;

	var table = $("<table><table/>").attr("id","songList");
	$("#songTable").html(table);
	var title = "<tr><th>Title</th>";
	var artist = "<th>Artist</th>";
	var album = "<th>Album</th>";
	var duration = "<th>Duration</th></tr>";
	$("#songList").append(title+artist+album+duration);

	var playlistSongs = playlists[key];
	console.log(playlistSongs);
	for (song in playlistSongs['songs']){
			var id = playlistSongs['songs'][song];
	    var title="<tr><td>"+songs[id]["title"]+"</td>";
	    var artist="<td>"+songs[id]["artist"]+"</td>";
	    var album="<td>"+songs[id]["album"]+"</td>";
	    var duration="<td>"+songs[id]["duration"]+"</td></tr>"
	   $("#songList").append(title+artist+album+duration);
	}
}
