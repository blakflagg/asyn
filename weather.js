var request = require('request');
const APIKEY = 'c6f474d91d53177532ea5db97ba11bf1';
const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&APIKEY=' + APIKEY;

module.exports = function(callback,locData){
    
    
    request({
    url: url + `&zip=${locData.postal},us`,
    json: true
    }, function(error, repsonse, body){
        
    if(error){
        callback('unable to fetch weather');
    }else{

        callback("it's " + body.main.temp + " in " + locData.city);
    }
    });
}