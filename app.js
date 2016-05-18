
var weather = require('./weather');
var location = require('./location.js');
var argv = require('yargs')
.command('location','location',function(yargs) {
  yargs.options({
      zip : {
          demand : false,
          alias : 'z',
          description : 'zip code',
          type : 'string'
      },
      city : {
          demand : false,
          alias : 'c',
          description : 'city and country code e.g. \"San Fransico,us\"',
          type : 'string'
      }
  }).help('help');
})
.help('help')
.argv;

var command = argv._[0];

if(command){
    var zip = (typeof argv.zip != 'undefined' ? argv.zip : null)    
    var city = (typeof argv.city != 'undefined' ? argv.city : null)

    var locData = {
        postal : zip,
        city : city
    }

    getWeather(locData);

}else{
    getWeather();
}


function getWeather(locData) {

if(!locData){
    location().then(function(locData){
       return weather(locData); 
    }).then(function(currentWeather){
        console.log(currentWeather);
    });
}else{
    weather(locData).then(function(currentWeather){
        console.log(currentWeather);
    });
}

}






