
var weather = require('./weather');
var location = require('./location.js');


location(function(locData){
    if(!locData){
        throw new Error('NO_DATA');
    }
    
    try {
        weather(function(callback){
         console.log(callback);
        },locData)
        //console.log(locData);
    } catch (error) {
        console.log('ERROR: ' + error.message);
    }

});








