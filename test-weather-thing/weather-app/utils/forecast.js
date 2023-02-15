const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=692331f72efee220e82cb196cfc9e9c6&query='+latitude+','+longitude+'&units=f'
request({ url, json: true }, (error, { body }) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    }else if (body.error) {
        console.log(`Unable to find location!`)
    } else {
        console.log(body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ` degrees out. There is a ` + body.current.precip + `% chance of rain. It feels like ` +body.current.feelslike + ` degrees out`)
    }

})
}

module.exports = forecast