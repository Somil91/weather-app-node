const request = require('request');

const SKY_KEY = 'bccc503ed7de2f1ac4d8ffcfe9d23dff'

const getWeather = (lat, lng, callback) => {
    request({
            url: `https://api.darksky.net/forecast/${SKY_KEY}/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if(!error && response.statusCode === 200){
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemperature:  body.currently.apparentTemperature
                });
            } else {
                callback('Unable to fetch weather a address');
            }
        });
    };



module.exports.getWeather = getWeather;