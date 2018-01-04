var trainNumber = 1;
while(trainNumber <= 8){
    console.log('Train #' + trainNumber + ' is running.');
    trainNumber++;
}

var num = 10;

while (num >= 1){
  console.log(num);
  num--;
}

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++){
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen <= 4){
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + (totalMW  += 62) + " MW!");
  currentGen++;
}
for(currentGen = 5; currentGen <= totalGen; currentGen++){
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + (totalMW += 124) + " MW!");
}