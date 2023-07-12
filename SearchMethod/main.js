
var text = 'The rain in SPAIN stays mainly in the plain'

var position1 = text.search('ain') // result: 5
 position2 = text.search(/ain/) // result: 5
 position3 = text.search(/AIN/) // result: 14
 position4 = text.search(/AIN/i) //result: 5
 position5 = text.search(/w/) // result: -1


console.log(position1);
console.log(position2);
console.log(position3);
console.log(position4);
console.log(position5);