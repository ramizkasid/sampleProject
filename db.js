var mongoose = require('mongoose');
var database = 'atmTransaction';
mongoose.connect('mongodb://localhost/'+database);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  	console.log('connect to mongodb '+database);
});
