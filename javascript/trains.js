// var trainsOperational = 8;
// var trainNumber = 1;
// var totalTrains = 12;

// while (trainNumber <= trainsOperational) {
//     console.log('Train #' + trainNumber + ' is running.');
//     trainNumber++;
// }

// for (var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++) {
//     console.log('Train #' + stoppedTrain + ' is not operational.');
// }

// for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
//     if (trainNumber <= trainsOperational) {
//         console.log('Train #' + trainNumber + ' is running.');
//     } else {
//         console.log('Train #' + trainNumber + ' is not operational.');
//     }
// }

var trainsOperational = 8;
var totalTrains = 12;

if (trainsOperational > 0) {
    if(trainsOperational === totalTrains){
        console.log("All trains are running at the Javascript Express!");
    } else {
        for (var trainNumber =1; trainNumber <= totalTrains; trainNumber++){
            if(trainNumber <= trainsOperational) {
                console.log("Train #" + trainNumber + " is running.");
            } else if (trainNumber === 10) {
                console.log("Train #10 begins running at noon.");
            } else {
                console.log("Train #" + trainNumber + " is not operational.");
            }
        }
    }
} else {
    console.log("No trains are operational today. Bummer!");
}