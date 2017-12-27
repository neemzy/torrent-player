var torrentStream = require('torrent-stream');

var engine = torrentStream('magnet:?xt=urn:btih:121C27A17C804315FDB7417FA3C049D6D287156B&dn=Mr+Robot+S03E10+720p+HDTV+x264+KILLERS&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce');

engine.on('ready', function() {
  var biggestFile = engine.files
    .sort(function(a, b) {
      if (a.length > b.length) {
        return 1;
      }

      if (b.length > a.length) {
        return -1;
      }

      return 0;
    })
    .pop();

  var stream = biggestFile.createReadStream();
  console.log(stream, typeof stream);
});
