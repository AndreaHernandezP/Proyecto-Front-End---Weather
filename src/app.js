var express = require("express");   //servidor
var app = express();
const path = require('path');        //rutas de archivos, src, public
const hbs = require('hbs');          //HTML dinámico
//const dataWeather = require('./utils/dataWeather');   //Opción 1 - Module Request

//request

app.set('view engine', 'hbs');

// Setup static directory to serve
//const publicDirectoryPath = path.join(__dirname, '..')      //Fuera de su carpeta
const publicDirectoryPath = path.join(__dirname, '../public') //Fuera de su carpeta en public
app.use(express.static(publicDirectoryPath))    //indica donde estan los archivos estáticos (CSS, JS, HTML)
app.use(express.json());    //Para que pueda leer archivos JSON

app.get('', (req, res) => {

        res.render('index', {
            Error: ' ',
            City: ' ',
            Icon: ' ',
            Temperature: ' ',
            WindSpeed: ' ',
            Humidity: ' ',

            })
    })

//Página no encontrada
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        errorMessage: 'Page not found.'
    })
})

/* //Opción 1   ----  Module Request - Mandar respuesta/información al Frontend
    app.post('/weather', (req, res) => {
        console.log("Desde el Backend: " + req.body);
    
        dataWeather(req.body.ciudad, (error, data) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                dataWeather: data,
                //location: 'Prueba',   //Manda la información al front
            })
            //console.log(data);
        });     
    }); */

  //Opción 2   ----  FetchAPI - Mandar respuesta/información al Frontend
    app.post('/weather', (req, res) => {
        console.log("Desde el Backend: " + req.body);
        
        fetch('http://api.weatherstack.com/current?access_key=d4861eb5cc4cb18ef825593bf0e5eb9e&query='+req.body.ciudad).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log('Error Backend')
                    console.log(data.error)
                    res.send({
                        dataWeather: data        //Si no se le pone nombre a la propiedad, se llamara data la propiedad del data enviadoej. -> data.data.error en el Frontend
                    })
                } else {
                    console.log('Exito Backend')
                    console.log(data)
                    res.send({
                        dataWeather: data
                        //dataWeather: data,    //Se envía dentro de la propiedad dataWeather -> data.dataWeather
                        //location: 'Prueba',   //Manda la información al front
                    })
                    //console.log("Datos de interés: "+ data.location.name + data.location.country + data.request.query + data.current.temperature + data.current.weather_icons + data.current.wind_speed + data.current.humidity)
                }
            })
        });     
    });


app.listen(3000, function() {
    console.log("App started on port 3000");
    });
    