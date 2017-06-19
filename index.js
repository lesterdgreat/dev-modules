var express = require('express');
var bodyParser = require('body-parser')
var app = express();  

app.use(bodyParser.json());

app.get('/temparatureConversion', function (req, res) {
 console.log('this page is for add user');
 res.sendStatus(200);
});	

/** this will receive an incoming POST for add user */
app.post('/temparatureConversion', function(req, res) {
	res.setHeader('Content-Type', 'application/json');

	// get the conversion if farenheit of celcius
	var convertTo = req.body.content.convertTo;
	var value = req.body.content.value;
	if (convertTo === 'Farenheit') {
		value = convertToFarenheit(value);
		convertTo = 'Celsius';
	} else if (convertTo === 'Celsius') {
		value = convertToCelsius(value);
		convertTo = 'Farenheit';
	}

	var response = JSON.stringify({ "convertTo" : value});
	console.log('conversion to ' + convertTo + ' answer is ' + value);
	res.send(response);
});

app.listen(process.env.PORT || 5000, function () {
 console.log('Example app listening on port 3000!');
});

// this converts the farenheit to celsius
function convertToCelsius(value) {
	return ((value * 9)/ 5) + 32;
}

// this converts the celsius to farenheit
function convertToFarenheit(value) {
	return ((value - 32) * 5) / 9;
}