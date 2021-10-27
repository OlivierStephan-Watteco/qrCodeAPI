var express = require('express');
var app = express();

var port = 3000;

const data = require('./sensor.json');

app.get('/', (req, res) => {
  res.send('Welcome to the API !');
});

app.get('/:id', function(req, res){
  var sensorId = parseInt(req.params.id);
  if(data[sensorId] != undefined){
    res.setHeader('Content-Type', 'application/json');
    res.json(data[sensorId]);
  }else{
    res.send(`The device you specidied is not defined in our database, or it might be corrupted. Device: ${sensorId}`);
  }
});

const server = app.listen(port, () => {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;