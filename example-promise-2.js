

function getLocation() {
    return new Promise(function(resolve, reject){
        resolve('New York,us');
        
    });
}

function getWeather(location) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('it\'s 45 in ' + location); 
        },1000);
    });
    
}

getLocation().then(function(location){
    return getWeather(location);
}).then(function(currentWeather){
    console.log(currentWeather);
})

