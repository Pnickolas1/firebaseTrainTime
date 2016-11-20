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

//INITIAL VALUES
	var train = "";
	var destination = "";
	var firstTrain = 0;
	var freqInt = 0;

$('button').on('click',function(){
	var trainName = $('#trainName').val();
	var destination = $("#destinationLocation").val();
	var firstTrain = $('#firstTrain').val();
	// var firstTrain = "08:30"
	firstTrain = firstTrain.match(new RegExp( $("#firstTrain").attr('pattern'), 'igm'));
	if (!firstTrain) {
		// failure
		return;
	}
	firstTrain = firstTrain[0];
	var freqInt = parseInt($("#frequencyInMins").val(),10);

	console.log(trainName);
	console.log(trainName.length);
	console.log(firstTrain);
	console.log(destination);
	console.log(freqInt);


if( trainName.length > 0 && destination.length > 0 && freqInt > 0){

	// GET TIME NOW
	var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm a"));

	//CONVERT TRAIN TIME TO MOMENT READABLE
	var firstTrainTime = moment(firstTrain, "HH:mm a").subtract(1, "years");	
      console.log("first train time is: ", moment(firstTrainTime).format("HH:mm a"));
      
     // GET DIFFERENCE IN TIME
     var timeDiff = moment().diff(moment(firstTrainTime), "minutes");
	console.log("Difference in time: ", timeDiff);

	var remainderTime = timeDiff % freqInt;
		console.log(remainderTime);

	// Minutes until train 
	var minsTillTrain = freqInt - remainderTime;
		console.log(minsTillTrain);


	//next train
	var nextTrain = moment().add(minsTillTrain,"minutes");
		trainDate = moment(nextTrain).format("hh:mm:ss a")
		console.log("Arrival time: ", moment(nextTrain).format("hh:mm:ss a"));


	$(".train").append( "<p>" + trainName + "</p>");
	$(".dest").append("<p>" + destination + "</p>");
	$(".freq").append("<p>" + freqInt + "</p>");
	$(".nextArrival").append("<p>" + trainDate + "</p>");
	$(".minsAway").append("<p>" + minsTillTrain + "</p>");


	//PUSH DATA TO FIREBASE
	database.ref().push({
		trainName: trainName,
		destination: destination,
		firstTrain: firstTrain,
		nextArrival: trainDate,
		minutesAWay: minsTillTrain,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});


};

return false; // DO NOT RELOAD PAGE AND END 
}); // ENDS ON BUTTON CLICK FUNCTIONALITY






});