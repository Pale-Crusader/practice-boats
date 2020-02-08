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

// function colorPick() {

//     var redBoat = " a Red boat?";
// 	var blueBoat = " a Blue boat?";
// 	var yellowBoat = " a Yellow boat?";
//     var boatQuestion;
//     var threeStrikes = 3;

//     for(var i = 0; i < 2 ; i++ ){
//         if (i === 0){
//             boatQuestion = redBoat;
//         } else if (i === 1) {
//             boatQuestion = yellowBoat; 
//         } else if (i === 2) {
//             boatQuestion = blueBoat;
//         }

//         var colorAnswer = confirm("Want " + boatQuestion)
//         if (colorAnswer) {
//             alert("We have that!"); 
//         } else {
//             alert("Sorry to hear that.");
//         }
//         console.log("What is three strikes?"+ (threeStrikes))
//         if (threeStrikes === 6){
//             alert("We only have red, blue, and yellow boats. Check out the Truck or Plane links from my page."); 
//         }
//     }
// }

function redBlueYellow() {
    var userColor = prompt("What color of boat would you like?");
    userColor = userColor.toLowerCase();
    console.log("The lower case test : ", userColor)
    while (userColor !== "yellow" && userColor !== "red" && userColor !== "blue"){
        userColor = prompt("Sorry, we only sell Red, Blue, or Yellow Boats. Which of those?");
        userColor = userColor.toLowerCase();
    }
};

function salesRequest() {
    var quantity = prompt("How many Boats would you like?");
    var offer;
    var price;
    var cart='';

    while (isNaN(quantity)){
        quantity = prompt("Please enter how many you want as a numerical number.")
    }
    Number(quantity);

    for(var i = 0; i < quantity ; i++ ){
        price = Math.floor((Math.random()*567));
        offer = 'There is a boat your could buy for '+ price +' dollars!';
        cart = cart + offer;
    } 

    return cart;
}