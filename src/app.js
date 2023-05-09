var express = require("express");   //servidor
var app = express();
const path = require('path');        //rutas de archivos, src, public
const hbs = require('hbs');          //HTML dinámico

//request

app.set('view engine', 'hbs');

// Setup static directory to serve
//const publicDirectoryPath = path.join(__dirname, '..')      //Fuera de su carpeta
const publicDirectoryPath = path.join(__dirname, '../public') //Fuera de su carpeta en public
app.use(express.static(publicDirectoryPath))    //indica donde estan los archivos estáticos (CSS, JS, HTML)

app.get('', (req, res) => {
    res.render('index', {
    title: 'My title',
    name: 'Andrew Mead'
    })
    })

/*
var barraBusqueda = document.querySelector('form');
const input = document.querySelector('input');
barraBusqueda.addEventListener('submit', (e) => {
    e.preventDefault()
    const ciudad = input.value;*/

    //http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query=New%20York
let ciudad = 'New York';    //API se encuentra en inglés
/*
fetch('http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query='+ciudad).then((response) => {
    response.json().then((data) => {
        if (data.error) {
        console.log(data.error)
        } else {
        console.log(data.location)
        console.log(data.request)
        console.log(data.current)
        //console.log("Datos de interés: "+ data.location.name + data.location.country + data.request.query + data.current.temperature + data.current.weather_icons + data.current.wind_speed + data.current.humidity)
        }
    })
})*/

    /*const temperatura = 20;

})*/




//Página no encontrada
/*app.get('*', (req, res) => {
    res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
    })
    })*/

app.listen(3000, function() {
    console.log("App started on port 3000");
    });
    