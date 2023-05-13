//$npm install request --save
const request = require('request');

const dataWeather = (location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query=' + location;

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect', undefined);
        } else{     //Location found
            callback(undefined, body);
            //console.log(body);
        }
    });

}

module.exports = dataWeather