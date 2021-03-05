console.log(__filename);
console.log(__dirname);

// setTimeout Function calling anonymous function
var printstuff=function (){
    console.log("Called timeout")
}
setTimeout(pssssrintstuff, 5000);

// setInterval function calls at regular intervals without breaking
setInterval(printstuff,2000);


// Callback Fucntion -> Restaurant scenario
console.log("User 1 request");
setTimeout(callback,5000);
console.log("User 2 request");
setTimeout(callback,2000);
console.log("User 3 request");
setTimeout(callback,3000);
function callback(){
    console.log("Quied request & Food Delivered")
}