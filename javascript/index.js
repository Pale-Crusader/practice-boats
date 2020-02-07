function confirmClick() {
var answer = confirm("If you're ready click to answer an important question.");
    console.log(answer);
    if (answer){
    alert("Perpare for amazing transportation options!");
    }
    else {
    alert("Are you sure?");
}
};

function likeBoats() {
var greeting = prompt("Like Boats? 1 = Yes 2 = No");
var reply;

while (greeting !== '1' && greeting !== '2'){
    greeting = prompt("Like Boats? 1 = Yes 2 = No, and not any other values.");
}

if (greeting === "2") {
    reply = 'You should check out the trucks and planes parts of our page!.';
}
else {
    reply = 'Welcome to Our Boat Page!';
}

return reply;
};

function colorPick() {
    var colorList = ["No Boat",'Red Boat', 'Yellow Boat', 'Blue Boat'];

    for(var i = 1; i < colorList.length ; i++ ){
    var colorAnswer = confirm("Want this many boats? " +i); {
    if (colorAnswer){
        alert("Nice!");
        };
}
}
}