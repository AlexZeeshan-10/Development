var a = "hello";
var b = "world";
var c = a.slice(0, 1);
var d = b.slice(0, 1);

var e = (c.toUpperCase() + a.slice(1, 6) + " " + d.toUpperCase() + b.slice(1, 6));

console.log(e);