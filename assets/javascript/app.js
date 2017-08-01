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

var database =firebase.database();

//Inital Value

trainName = "";
finalDestination = "";
howOften = 0;
firstTrain = 0;

$("#submit").on("click", function(){

  var trainName = $("#trainName").val().trim();
  var finalDestination = $("#finalDestination").val().trim();
  var howOften = $("#howOften").val().trim();
  var firstTrain = $("#firstTrain").val().trim();

  database.ref().set({
    trainName : trainName,
    finalDestination : finalDestination,
    howOften : howOften,
    firstTrain : firstTrain

  })

  $("#train").append("<p>" + trainName);
});

})

