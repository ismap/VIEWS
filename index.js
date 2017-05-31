var express = require('express');
var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
 	response.sendFile(__dirname + 'public/index.html')
});


app.listen(port, function(){
 	console.log('server express ready in' + ' ' + port);
});