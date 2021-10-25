var express = require('express');
var app = express();

const data = require('./sensor.json');


app.get('/:id', function(req, res){
  var sensorId = parseInt(req.params.id);
  if(data[sensorId] != undefined){
    res.send(data[sensorId]);
  }else{
    res.send(`The device you specidied is not defined in our database, or it might be corrupted. Device: ${sensorId}`);
  }
});

app.listen(3000);