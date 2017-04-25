const mongoose = require( 'mongoose' );

mongoose.connect('mongodb://localhost/generic-test')
mongoose.Promise = global.Promise

mongoose.connection.on('connected', function () {
  console.log('Connection open to localhost/generic-test');
});

mongoose.connection.on('error',function (err) {
  console.log(`Connection error: ${err}`);
});

mongoose.connection.on('disconnected', function () {
  console.log('Connection disconnected');
});

mongoose.connection.on('open', function () {
  console.log('Connection starts');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Connection disconnected');
    process.exit(0);
  });
});