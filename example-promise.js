// function doWork(data,callback) {
//     callback('done');
// }

// function doWorkPromise(data) {
//     return new Promise(function(resolve,reject) {
//         setTimeout(function() {
//             //resolve('everything worked');
//             reject('everything is broken'); 
//         },2000);
//     });
// }

// doWorkPromise('some data').then(function(data) {
//     console.log(data);
// },function(error){
//     console.log(error);
// });
var request = require('request');
const APIKEY = 'c6f474d91d53177532ea5db97ba11bf1';
const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&APIKEY=' + APIKEY;

function getWeather(locData) {

    return new Promise(function(resolve, reject){
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
                reject('Can\'t get weather');
            }else{
                resolve("it's " + body.main.temp + " in " + body.name);
            }
            
        });
    
    });
}

location = {
    city : 'Irvine,us'
}

getWeather(location).then(function(data){
    console.log(data);
},function(error) {
   console.log(error); 
});
