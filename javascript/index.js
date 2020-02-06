alert("Perpare for amazing transportation options!");

confirm("If you're ready click to answer an important question.")

var greeting = prompt("Like Boats? 1 = Yes 2 = No");
var reply;

if (greeting == 2) {
    reply = 'You should check out the trucks and planes parts of our page!.';
}
else {
    reply = 'Welcome to Our Boat Page!';
}

document.write('<h3>' + reply + '</h3>');