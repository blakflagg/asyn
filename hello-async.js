// setTimeout(function(){
//     console.log('1');
// }, 2000);

// setTimeout(function(){
//     console.log('3');
// }, 1000);

// console.log('2');

//--- challenge


function printInTwoSeconds(message) {
    // wait 2 seconds
    setTimeout(function() {
        console.log(message)
    },2000)
}

printInTwoSeconds('hello async');