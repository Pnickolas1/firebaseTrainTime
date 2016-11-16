$(document).ready(function(){
	console.log('document loaded');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXsWTqlvnJzgtEJOwPkgQQ4UZdHbF5tI8",
    authDomain: "fir-hw7-a4ff1.firebaseapp.com",
    databaseURL: "https://fir-hw7-a4ff1.firebaseio.com",
    storageBucket: "fir-hw7-a4ff1.appspot.com",
    messagingSenderId: "1046072906504"
  };

//CONFIGURE FIREBASE
  firebase.initializeApp(config);

//FIREBASE CONFIGURE THE DATABASE
var database = firebase.database();
	console.log("Firebase Config: ",config.databaseURL);

	var timeNow = moment().format("kk:mm:ss a");
	console.log(timeNow);



$('button').on('click',function(){
	var trainName = $('#trainName').val().trim();
	var destination = $("#destination").val().trim();
	var firstTrain = $('#firstTrain').val();
	var frequency = parseInt($("#frequencyInMins").val().trim(),10);

	console.log(trainName);
	console.log(trainName.length);
	console.log(destination);
	console.log(frequency);


// if( trainName.length > 0 && destination.length > 0 && firstTrain > 0 && frequency > 0){
		


// };




return false; // DO NOT RELOAD PAGE AND END 
}); // ENDS ON BUTTON CLICK FUNCTIONALITY






});