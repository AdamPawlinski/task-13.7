var fs = require('fs');
process.stdin.on('readable', function() {
  var path = process.stdin.read();
  if (path !== null) {
    var dirPath = path.toString().trim();
    fs.readdir(dirPath, 'utf-8', function(err, files){
        fs.writeFile('./dirFiles.txt', files, function(err) {
        if (err) throw err;
        console.log('Filenames from directory ' + dirPath + ' were written.');
        });
    });
  }
});
