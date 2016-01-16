var zipCode = parseFloat(process.argv[2]);
var request = require('request');
var weatherKey = 'b38ff9d68e848e677a112f4cb48f5d79'

request=('http://api.openweathermap.org/data/2.5/weather?zip=' + argv + '&APPID'= +weather)
  var returnData= JSON.parse(body);
  var kTemp = returnData.main.temp;
  var fTemp= ((kTemp-273.15)*1.8)+32;

  console.log(kTemp);
  console.log(fTemp);

});