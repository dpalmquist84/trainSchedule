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

var trainName = "Train";
var final = "TBD";
var howOften = "00:00";
var firstTrain = "00:00";
var time = new Date();
var currentTime = moment().format("hh:mm");
var howOftenInt = parseInt(howOften);
var arrivalInt = parseInt(time.getMinutes());
var arrival = (howOftenInt - arrivalInt) * (-1);






$(".time").html("The current time is: " + currentTime);



$("#submit").on("click", function(){
  event.preventDefault();

  trainName = $("#train-form").val().trim();
  final = $("#destination-form").val().trim();
  howOften = $("#frequency-form").val().trim();
  howOften = moment(howOften).format("LT");
  console.log(howOften);
  howOftenInt = parseInt(howOften);
  firstTrain = $("#firstTrain-form").val().trim();
  console.log(firstTrain);
  arrivalInt = parseInt(time.getMinutes());
  console.log(arrivalInt);
  arrival = arrivalInt - howOftenInt;
  console.log(arrival);
  $(".time").html("The current time is: " + currentTime);


  console.log(duration);


    
  database.ref().push({
    trainName : trainName,
    final : final,
    howOftenInt : howOftenInt,
    firstTrain : firstTrain,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    


  })



});

     database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

       

         $("#train-display").append("<p>" + snapshot.val().trainName);
         $("#destination-display").append("<p>" + snapshot.val().final);
         $("#frequency-display").append("<p>" + howOften + " minutes");
         $("#minAway-display").append("<p>" + arrival + " minutes");
         $("#nextArrival-display").append("<p>" + firstTrain);
    



      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

})
