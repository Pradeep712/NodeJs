function relay() {
    console.log("Inside Relay");
}
function longJump() {
    console.log("Inside LongJump");
}
module.exports.relay = relay;
module.exports.longJump = longJump;


// Exporting Funtions as objects
modules.exports={
    relay: function(){
        console.log("Inside Relay funtion");
    },
    longJump: function(){
        console.log("Inside longjump funtion");
    }
}