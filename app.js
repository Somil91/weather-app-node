
const request = require('request');

const API_KEY = 'AIzaSyDJm4tctOf4GAHy5bEMu0rIrPpm4mbOM_s';
const KEY = `&key=${API_KEY}`;


request({
    url: `https://maps.google.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia${KEY}`,
    json: true
}, (error, response, body) => {
    console.log(body);
});