const request = require('request');

exports.getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a5cd2f3e388c2aa2d5d5fbb843d02e70/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    })
}
