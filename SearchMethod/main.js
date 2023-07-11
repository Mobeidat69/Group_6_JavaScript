
var text = 'The rain in SPAIN stays mainly in the plain'

var position1 = text.search('ain') // result: 5
var position2 = text.search(/ain/) // result: 5
var position3 = text.search(/AIN/) // result: 14
var position4 = text.search(/AIN/i) //result: 5
var position5 = text.search(/w/) // result: -1

console.log(position5);