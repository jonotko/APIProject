var express = require("express");
var moment = require("moment");
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/:string", function(req, res){
    
  var string =  req.params.string; 
  var timeObject;
  if(!isNaN(parseInt(string))){
      var time = moment(parseInt(string)*1000).format("MMMM DD, YYYY");

      timeObject = {
          unix: string,
          natural: time
      }
  }else if (moment(string).isValid()){
      
      var time = moment(string).format("X");
      
      timeObject = {
          unix: time,
          natural: string
      }
  }else{
      
      timeObject = {
          unix: null,
          natural: null
      }
  }
  
   res.send(JSON.stringify(timeObject));
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 8080!');
});