var exp = require('express');

var app = exp();

app.get('/hello.txt', function(req, res){
 res.send('Hello World');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
