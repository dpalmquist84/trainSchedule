$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDALoqjCQB8KEa9ZM-xFDEJIp06YxPDrf0",
    authDomain: "train-scheduler-92940.firebaseapp.com",
    databaseURL: "https://train-scheduler-92940.firebaseio.com",
    projectId: "train-scheduler-92940",
    storageBucket: "train-scheduler-92940.appspot.com",
    messagingSenderId: "635863192147"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//Inital Value

trainName = "Train";
final = "TBD";
howOften = "00:00";
firstTrain = "00:00";
time = new Date();
currentTime = time.getHours() + ":" + time.getMinutes();

number = Number();
arrivalInt = parseInt(time.getMinutes());
console.log(arrivalInt);




$(".time").html("The current time is: " + currentTime);



$("#submit").on("click", function(){
  event.preventDefault();

  var trainName = $("#train-form").val().trim();
  var final = $("#destination-form").val().trim();
  var howOften = $("#frequency-form").val().trim();
  var howOftenInt = parseInt(howOften);
  var firstTrain = $("#firstTrain-form").val().trim();
  console.log(firstTrain);
  arrivalInt = parseInt(time.getMinutes());
  console.log(arrivalInt);
  var arrival = arrivalInt - howOftenInt;
  console.log(arrival);

  time = new Date();
  currentTime = time.getHours() + ":" + time.getMinutes();
  $(".time").html("The current time is: " + currentTime);


    
  database.ref().push({
    trainName : trainName,
    final : final,
    howOftenInt : howOftenInt,
    firstTrain : firstTrain,
    arrival : arrival


  })

      $("#train-display").append("<p>" + trainName);
      $("#destination-display").append("<p>" + final);
      $("#frequency-display").append("<p>" + howOftenInt);
      $("#nextArrival-display").append("<p>" + firstTrain);
      $("#minAway-display").append("<p>" + arrival)
      console.log(arrival);


});

    database.ref().on("value", function(snapshot) {

       

         // $("#train").append("<p>" + trainName);
         // $("#destination").append("<p>" + final);
         // $("#frequency").append("<p>" + howOften);
         // $("#minAway").append("<p>" + firstTrain);
         // $("#nextArrival").append("<p>" + arrival);
    



      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

})

