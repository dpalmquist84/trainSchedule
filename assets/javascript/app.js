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
var currentTime = moment().format("hh:mm")
var howOftenInt = parseInt(howOften);
var number = Number();
var arrivalInt = parseInt(time.getMinutes());
console.log(arrivalInt);
var arrival = (howOftenInt - arrivalInt) * (-1);
console.log(arrival);




$(".time").html("The current time is: " + currentTime);



$("#submit").on("click", function(){
  event.preventDefault();

  trainName = $("#train-form").val().trim();
  final = $("#destination-form").val().trim();
  howOften = $("#frequency-form").val().trim();
  // howOftenInt = parseInt(howOften);
  howOftenTime = moment(howOften, "hh:mm");
  firstTrain = $("#firstTrain-form").val().trim();
  
  arrival = arrivalInt - howOftenInt;

  var firstTrainTime = moment(firstTrain, "hh:mm");
  var firstTrainHours = firstTrainTime.hour() + ":" + firstTrainTime.minutes();
  
  var duration = moment().subtract(firstTrainTime, howOftenTime).format("hh:mm");
  console.log(duration);
  var durationTime = duration.hour() + ":" + duration.minutes();
  console.log(durationTime)


 
  $(".time").html("The current time is: " + currentTime);



    
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
         $("#frequency-display").append("<p>" + howOftenInt + " minutes");
         $("#minAway-display").append("<p>" + arrival + " minutes");
         $("#nextArrival-display").append("<p>" + arrival);

         $("#train-form").val("");
         $("#destination-form").val("");
         $("#frequency-form").val(" ");
         $("#firstTrain-form").val(" ");



      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

})
