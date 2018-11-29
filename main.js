var songs = {
  1: {
    artist: "Kanye West",
    title: "All of the Lights",
    album: "My Beautiful Dark Twisted Fantasy",
    duration: 300
  },
  2: {
    artist: "BROCKHAMPTON",
    title: "District",
    album: "iridescence",
    duration: 211
  },
  3: {
    artist: "Kendrick Lamar",
    title: "Humble",
    album: "DAMN",
    duration: 177
  },
  4: {
    artist: "Travis Scott",
    title: "Skyfall",
    album: "Days Before Rodeo",
    duration: 318
  },
  5: {
    artist: "Denzel Curry",
    title: "This Life",
    album: "Imperial",
    duration: 207
  }
};

var playlists = {
  'Study': {
    name: 'Study',
    songs: [1, 2]
  },
  'Gym': {
    name: 'Gym',
    songs: [1, 2, 3, 4]
  },
  'Relax': {
    name: 'Relax',
    songs: [3, 4]
  }
}

var activePlaylist = Object.keys(playlists)[0];

$("html").on("click", ".fas.fa-play", function() {
  $(this).addClass("hidden");
  $(".fas.fa-pause").removeClass("hidden");
})
$("html").on("click", ".fas.fa-pause", function() {
  $(this).addClass("hidden");
  $(".fas.fa-play").removeClass("hidden");
})

$("html").on('click', '#playlistList div', function() {
  var id = $(this).attr('id');
  showPlaylist(id)
  activePlaylist = id;
  $("#playlistList div").removeClass('active');
  $(this).addClass('active');

});

$("html").on('click', '#nav-bar h2', function() {
  var id = $(this).attr('data-id');
  $("#nav-bar h2").removeClass('active');
  $(this).addClass('active');
  $("[id$='Window']").addClass('hidden');
  $("#" + id + "Window").removeClass('hidden');
});

$("html").on('click', '.songList tbody tr', function() {
  $(".songList tr").removeClass('active');
  $(this).addClass('active');
  var tableVal = []
  $(this).find('td').each(function(i) {
    tableVal.push($(this).text());
  })

  $("#songname").html(tableVal[0]);
  $("#artistname").html(tableVal[1]);

  $("#progress-right").html(tableVal[3]);
  var time = tableVal[3].split(":");
  var seconds = (+time[0] * 60) + (+time[1]);

  $("#progressbar").attr("max", seconds);
	$("#progressbar").val('0');
  var currenttime = convertDuration($("#progressbar").val());
  $("#progress-left").html(currenttime[0] + ":" + currenttime[1].toString().padStart(2, '0'));

	$("#albumart").html(`<img src='https://picsum.photos/200/200/?image=${$(this).attr('data-id')}'/>`);
});

$("html").on('input', '#progressbar', function() {
	var currenttime = convertDuration($(this).val());
	$("#progress-left").html(currenttime[0] + ":" + currenttime[1].toString().padStart(2, '0'));
});

$(function() {
  $("#add").on('click', function() {
    newPlaylist()
  })
  playlistSidebar();
  $("#" + activePlaylist).click();
  showLibrary();
});

function playlistSidebar() {
  for (index in playlists) {
    var playlistName = playlists[index].name;
    var name = $("<div><p>" + playlistName + "</p></div>").attr("id", playlistName);
    if (playlistName == activePlaylist) {
      name.addClass('active');
    }
    $("#playlistList").append(name);
  }
}

function showPlaylist(playlist) {
  var key = playlist;
  var playlistName = "<h3>" + playlist + "</h3>";
  var numSongs = "<p>" + playlists[key].songs.length + " Songs</p>";
  var durationLength = 0;
  for (i in playlists[key].songs) {
    var id = playlists[key].songs[i]
    durationLength = durationLength + songs[id].duration;
  }
  var durationVal = convertDuration(durationLength);
  var duration = "<p>" + durationVal[0] + " minutes " + durationVal[1] + " seconds</p>";
  $("#playlistHeader").html(playlistName + numSongs + duration);
  var table = $("<table></table>").attr("class", "songList");

  var html = `
	<thead><tr><th>Title</th>
	<th>Artist</th>
	<th>Album</th>
	<th>Duration</th></tr></thead><tbody>`

  var playlistSongs = playlists[key];
  for (song in playlistSongs['songs']) {
    var duration = 0;
    var id = playlistSongs['songs'][song];
    duration = convertDuration(songs[id]["duration"]);
    html += `
			<tr data-id=${id}><td><span>${songs[id]["title"]}</span></td>
			<td><span>${songs[id]["artist"]}</span></td>
			<td><span>${songs[id]["album"]}</span></td>
			<td><span>${duration[0] + ":" + duration[1].toString().padStart(2,'0')}</span></td></tr>
			`
  }
  html += "</tbody>";
  table.html(html);
  $("#playlistWindow .songTable").html(table);
  $('.songList').dataTable({
		autoWidth: false,
    paging: false,
    searching: false,
    bInfo: false,
    destroy: true,
    "language": {
      "emptyTable": "There are no songs in this playlist."
    },
    "columns": [{
        "width": "35%"
      },
      {
        "width": "25%"
      },
      {
        "width": "25%"
      },
      {
        "width": "15%"
      },
    ]
  });
}

function showLibrary() {
  var table = $("<table></table>").attr("class", "songList");

  var html = `
	<thead><tr><th>Title</th>
	<th>Artist</th>
	<th>Album</th>
	<th>Duration</th></tr></thead><tbody>`

  for (song in songs) {
    var duration = 0;
    var id = song;
    duration = convertDuration(songs[id]["duration"]);

    html += `
			<tr data-id=${id}><td><span>${songs[id]["title"]}</span></td>
			<td><span>${songs[id]["artist"]}</span></td>
			<td><span>${songs[id]["album"]}</span></td>
			<td><span>${duration[0] + ":" + duration[1].toString().padStart(2,'0')}</span></td></tr>
			`
  }
  html += "</tbody>";
  table.html(html);
  $("#libraryWindow .songTable").html(table);
  $('#libraryWindow .songTable.songList').dataTable({
		autoWidth: false,
    paging: false,
    searching: false,
    bInfo: false,
    destroy: true,
    "language": {
      "emptyTable": "There are no songs in your library."
    },
    "columns": [{
        "width": "35%"
      },
      {
        "width": "25%"
      },
      {
        "width": "25%"
      },
      {
        "width": "15%"
      },
    ]
  });
}

function convertDuration(duration) {
  var minutes = parseInt(duration / 60);
  var seconds = duration % 60;
  return [minutes, seconds]
}

function newPlaylist() {
  $("#playlistList").html("");
  var name = prompt("Enter Playlist name:", "Playlist");
  var value = {
    name: name,
    songs: []
  }
  playlists[name] = value;
  playlistSidebar();
}
