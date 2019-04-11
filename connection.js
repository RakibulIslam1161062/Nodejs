const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
  console.log('connection Established');
});
