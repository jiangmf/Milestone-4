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

var playlists = [
	{
  	name: "asd",
    songs: [1,2,3,4],
  }
]

$(function(){
var table = $("<table><table/>").attr("id","songList");
$("#songTable").append(table);
var title = "<tr><td>Title</td>";
var album = "<td>Artist</td>";
var album = "<td>Album</td>";
var duration = "<td>Duration</td></tr>";
$("#songList").append(title+artist+album+duration);

for (song in songs){
    var title="<tr><td>"+songs[song]["title"]+"</td>";
    console.log(songs[song]["title"]);
    var artist="<td>"+songs[song]["artist"]+"</td>";
    var album="<td>"+songs[song]["album"]+"</td>";
    var duration="<td>"+songs[song]["duration"]+"</td></tr>"
   $("#songList").append(title+artist+album+duration);
}
})
