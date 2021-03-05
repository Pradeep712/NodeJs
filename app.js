// Method: 1 Normal function call
function printstuff(stuff) {
    console.log(stuff);
}
function mainFn(anotherFn, value) {
    anotherFn(value)
}
mainFn(printstuff, "Hello Pradeep");


// Method:2 Anonymous Function ->function without name
var printstuff = function (stuff) {
    console.log(stuff);
}
function mainFn(anotherFn, value) {
    anotherFn(value)
}
mainFn(printstuff, "Hello Pradeep");


// Method:3 Anonymous/Callback Function as Parameter
function mainFn(anotherFn, value) {
    anotherFn(value)
}
mainFn(function (stuff) { console.log(stuff); }, "Pradeep")