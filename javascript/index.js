function confirmClick() {
    var answer = confirm("If you're ready click to answer an important question.");

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
    }else {
        reply = 'Welcome to Our Boat Page!';
    }

    return reply;
};

function colorPick() {
    var colorList = ['Red Boat', 'Yellow Boat', 'Blue Boat'];
    var redBoat = " a Red boat?";
	var blueBoat = " a Blue boat?";
	var yellowBoat = " a Yellow boat?";
    var boatQuestion;
    var threeStrikes;

    for(var i = 0; i < colorList.length ; i++ ){
    if (i === 0){
        boatQuestion = redBoat;
    } else if (i === 1) {
        boatQuestion = yellowBoat;
    } else if (i === 2) {
        boatQuestion = blueBoat;
    }

    var colorAnswer = confirm("Want " + boatQuestion); {
    if (colorAnswer) {
        alert("We have that!"); 
        }
    else {
        alert("Sorry to hear that.")
    }
}
}
}