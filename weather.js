var request = require('request');
const APIKEY = 'c6f474d91d53177532ea5db97ba11bf1';
const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&APIKEY=' + APIKEY;

// module.exports = function(locData,callback){
//     var qString = '';
//     if(locData.postal){
//         qString = `&zip=${locData.postal},us`
//     }else if(locData.city){
//         qString = `&q=${locData.city}`
//     }
    
//     request({
//     url: url + qString,
//     json: true
//     }, function(error, repsonse, body){
        
//     if(error){
//         callback('unable to fetch weather');
//     }else{

//         callback("it's " + body.main.temp + " in " + body.name);
//     }
//     });
// }

module.exports = function(locData){
    return new Promise(function(resolve,reject){
        var qString = '';
        if(locData.postal){
         qString = `&zip=${locData.postal},us`
        }else if(locData.city){
            qString = `&q=${locData.city}`
        }
        
        request({
        url: url + qString,
        json: true
        }, function(error, repsonse, body){
            
        if(error){
            reject('unable to fetch weather');
        }else{

            resolve("it's " + body.main.temp + " in " + body.name);
        }
        });

    });
}