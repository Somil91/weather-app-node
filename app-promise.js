
const yargs = require('yargs');
const axios = require('axios');

const API_KEY = 'AIzaSyDJm4tctOf4GAHy5bEMu0rIrPpm4mbOM_s';
const SKY_KEY = 'bccc503ed7de2f1ac4d8ffcfe9d23dff'
const KEY = `&key=${API_KEY}`;

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);


const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}${KEY}`;



axios.get(geocodeUrl)
    .then((response) => {
        if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address.');
        }
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        const weatherUrl = `https://api.darksky.net/forecast/${SKY_KEY}/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
}).then((response) => {
    let temp = response.data.currently.temperature;
    let atemp = response.data.currently.apparentTemperature;
    console.log(`it's currently ${temp}, but feel like ${temp}`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('unable to connect to api servers');
    } else {
        console.log(e.message);
    } 
});