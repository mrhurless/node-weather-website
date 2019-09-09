const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/075f4cbcbb81d95987f9f97be28ba6ce/' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
       
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location.', undefined)
        } else (
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.\nHigh today of '+ body.daily.data[0].temperatureHigh + ' degrees. With a low of ' + body.daily.data[0].temperatureLow + ' degrees.')
        )
    })
}

module.exports = forecast