var zipCode = parseFloat(process.argv[2]);
var request = require('request');
var weatherKey = 'b38ff9d68e848e677a112f4cb48f5d79'

request=('http://api.openweathermap.org/data/2.5/weather?zip=' + argv + '&APPID'= +weather)
  console.log(body);
  var returnData= JSON.parse(body);
  var kTemp = returnData.main.temp;
  var fTemp= ((kTemp-273.15)*1.8)+32;

  function movie(movieType{
    request("http://www.omdbapi.com/?t="+ movieType +"")
    var movieObject = JSON.parse(body);
    console.log("the title is", movieObject.Title);
  })

 if(fTemp<45){
  movie('the+notebook')
 } else if(fTemp<=60){

 } else{

 }

});