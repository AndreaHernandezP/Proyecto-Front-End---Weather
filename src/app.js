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

//http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query=New%20York

//Página no encontrada
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, function() {
    console.log("App started on port 3000");
    });
    